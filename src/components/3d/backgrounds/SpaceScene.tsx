'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

interface SpaceSceneProps {
    isDark: boolean
    isMobile: boolean
}

function NebulaParticles({ opacityRef }: { opacityRef: { current: number } }) {
    const pointsRef = useRef<THREE.Points>(null)

    const { positions, colors } = useMemo(() => {
        const count = 400
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const palette = [
            [0.5, 0.2, 0.8],
            [0.3, 0.1, 0.6],
            [0.8, 0.2, 0.5],
            [0.2, 0.3, 0.8],
        ]
        for (let i = 0; i < count; i++) {
            const r = 6 + Math.random() * 12
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = r * Math.cos(phi)
            const c = palette[Math.floor(Math.random() * palette.length)]
            colors[i * 3] = c[0]
            colors[i * 3 + 1] = c[1]
            colors[i * 3 + 2] = c[2]
        }
        return { positions, colors }
    }, [])

    useFrame(() => {
        if (pointsRef.current) {
            const mat = pointsRef.current.material as THREE.PointsMaterial
            mat.opacity = opacityRef.current * 0.6
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.12}
                vertexColors
                transparent
                opacity={0}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}

export default function SpaceScene({ isDark, isMobile }: SpaceSceneProps) {
    const groupRef = useRef<THREE.Group>(null)
    const opacityRef = useRef(isDark ? 1 : 0)

    useFrame((_, delta) => {
        const target = isDark ? 1 : 0
        opacityRef.current += (target - opacityRef.current) * Math.min(delta * 1.5, 1)
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.008
            groupRef.current.visible = opacityRef.current > 0.01
        }
    })

    return (
        <group ref={groupRef}>
            <Stars
                radius={80}
                depth={40}
                count={isMobile ? 1200 : 3000}
                factor={4}
                saturation={0.1}
                fade
                speed={0.5}
            />
            <NebulaParticles opacityRef={opacityRef} />
        </group>
    )
}
