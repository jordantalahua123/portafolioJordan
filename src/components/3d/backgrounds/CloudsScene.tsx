'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CloudsSceneProps {
    isDark: boolean
    isMobile: boolean
}

function CloudCluster({ position, scale, opacityRef }: {
    position: [number, number, number]
    scale: number
    opacityRef: { current: number }
}) {
    const groupRef = useRef<THREE.Group>(null)
    const meshRefs = useRef<THREE.Mesh[]>([])

    const offsets = useMemo(() =>
        Array.from({ length: 6 }, () => ({
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 0.6,
            z: (Math.random() - 0.5) * 1.5,
            r: 0.4 + Math.random() * 0.6,
        }))
    , [])

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.position.x += delta * 0.08
            if (groupRef.current.position.x > 18) {
                groupRef.current.position.x = -18
            }
        }
        meshRefs.current.forEach((mesh) => {
            if (mesh) {
                const mat = mesh.material as THREE.MeshStandardMaterial
                mat.opacity = opacityRef.current * 0.55
            }
        })
    })

    return (
        <group ref={groupRef} position={position} scale={scale}>
            {offsets.map((o, i) => (
                <mesh key={i} position={[o.x, o.y, o.z]} ref={(el) => { if (el) meshRefs.current[i] = el }}>
                    <sphereGeometry args={[o.r, 8, 8]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        transparent
                        opacity={0}
                        roughness={1}
                        metalness={0}
                        depthWrite={false}
                    />
                </mesh>
            ))}
        </group>
    )
}

function Sun({ opacityRef }: { opacityRef: { current: number } }) {
    const coreRef = useRef<THREE.Mesh>(null)
    const halo1Ref = useRef<THREE.Mesh>(null)
    const halo2Ref = useRef<THREE.Mesh>(null)
    const lightRef = useRef<THREE.PointLight>(null)

    useFrame(() => {
        const op = opacityRef.current
        if (coreRef.current) (coreRef.current.material as THREE.MeshBasicMaterial).opacity = op
        if (halo1Ref.current) (halo1Ref.current.material as THREE.MeshBasicMaterial).opacity = op * 0.25
        if (halo2Ref.current) (halo2Ref.current.material as THREE.MeshBasicMaterial).opacity = op * 0.1
        if (lightRef.current) lightRef.current.intensity = op * 2
    })

    return (
        <group position={[6, 3, -8]}>
            <mesh ref={coreRef}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial color="#FFE566" transparent opacity={0} />
            </mesh>
            <mesh ref={halo1Ref}>
                <sphereGeometry args={[1.8, 16, 16]} />
                <meshBasicMaterial color="#FFD700" transparent opacity={0} depthWrite={false} />
            </mesh>
            <mesh ref={halo2Ref}>
                <sphereGeometry args={[2.6, 16, 16]} />
                <meshBasicMaterial color="#FFF4AA" transparent opacity={0} depthWrite={false} />
            </mesh>
            <pointLight ref={lightRef} color="#FFE566" intensity={0} distance={30} />
        </group>
    )
}

const cloudConfigs: { position: [number, number, number]; scale: number }[] = [
    { position: [-12, 1.5, -5], scale: 1.4 },
    { position: [-4,  2.5, -6], scale: 1.0 },
    { position: [3,   1.0, -4], scale: 1.6 },
    { position: [10,  3.0, -7], scale: 0.9 },
    { position: [-8,  0.5, -3], scale: 1.2 },
    { position: [6,   1.5, -5], scale: 1.1 },
]

export default function CloudsScene({ isDark, isMobile }: CloudsSceneProps) {
    const groupRef = useRef<THREE.Group>(null)
    const opacityRef = useRef(isDark ? 0 : 1)

    useFrame((_, delta) => {
        const target = isDark ? 0 : 1
        opacityRef.current += (target - opacityRef.current) * Math.min(delta * 1.5, 1)
        if (groupRef.current) {
            groupRef.current.visible = opacityRef.current > 0.01
        }
    })

    const count = isMobile ? 3 : cloudConfigs.length

    return (
        <group ref={groupRef}>
            <ambientLight color="#87CEEB" intensity={0.8} />
            <Sun opacityRef={opacityRef} />
            {cloudConfigs.slice(0, count).map((cfg, i) => (
                <CloudCluster key={i} position={cfg.position} scale={cfg.scale} opacityRef={opacityRef} />
            ))}
        </group>
    )
}
