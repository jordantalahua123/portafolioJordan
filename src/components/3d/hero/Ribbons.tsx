'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface RibbonProps {
    tiltX: number
    tiltZ: number
    color: string
    speed: number
    arcFraction: number
    startAngle: number
}

function Ribbon({ tiltX, tiltZ, color, speed, arcFraction, startAngle }: RibbonProps) {
    const groupRef = useRef<THREE.Group>(null)

    const curve = useMemo(() => {
        const points: THREE.Vector3[] = []
        const r = 1.15
        const segments = 60
        for (let i = 0; i <= segments; i++) {
            const t = i / segments
            const angle = startAngle + t * Math.PI * 2 * arcFraction
            // Points on a great circle tilted by tiltX around X and tiltZ around Z
            const x = r * Math.cos(angle)
            const y = r * Math.sin(angle) * Math.cos(tiltX) - r * Math.sin(angle) * Math.sin(tiltZ) * 0.3
            const z = r * Math.sin(angle) * Math.sin(tiltX) + r * Math.cos(angle) * Math.sin(tiltZ) * 0.2
            points.push(new THREE.Vector3(x, y, z))
        }
        return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5)
    }, [tiltX, tiltZ, arcFraction, startAngle])

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * speed
        }
    })

    return (
        <group ref={groupRef}>
            <mesh>
                <tubeGeometry args={[curve, 120, 0.018, 8, false]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.1}
                    emissive={color}
                    emissiveIntensity={0.15}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </group>
    )
}

const ribbonConfigs: RibbonProps[] = [
    { tiltX: 0.4,  tiltZ: 0.1,  color: '#F5D0D0', speed: 0.08,  arcFraction: 0.65, startAngle: 0 },
    { tiltX: -0.5, tiltZ: 0.3,  color: '#C6C0E8', speed: -0.06, arcFraction: 0.75, startAngle: 1.1 },
    { tiltX: 0.8,  tiltZ: -0.2, color: '#F5D0D0', speed: 0.05,  arcFraction: 0.55, startAngle: 2.3 },
    { tiltX: -0.3, tiltZ: -0.5, color: '#C6C0E8', speed: -0.09, arcFraction: 0.70, startAngle: 0.6 },
    { tiltX: 0.6,  tiltZ: 0.4,  color: '#e8d0f5', speed: 0.07,  arcFraction: 0.60, startAngle: 3.5 },
]

export default function Ribbons() {
    return (
        <>
            {ribbonConfigs.map((cfg, i) => (
                <Ribbon key={i} {...cfg} />
            ))}
        </>
    )
}
