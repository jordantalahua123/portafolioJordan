'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Html } from '@react-three/drei'
import * as THREE from 'three'

interface HexTileProps {
    position: [number, number, number]
    logo: string
    accentColor: string
    label: string
    index: number
}

function HexTileInner({ position, logo, accentColor, label, index }: HexTileProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const scaleRef = useRef(1)
    const timeRef = useRef(Math.random() * Math.PI * 2)
    const texture = useTexture(logo)

    // Ensure texture color space is correct
    texture.colorSpace = THREE.SRGBColorSpace

    const sideMaterial = new THREE.MeshStandardMaterial({
        color: accentColor,
        roughness: 0.4,
        metalness: 0.3,
    })
    const topMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
    })
    const bottomMaterial = new THREE.MeshStandardMaterial({
        color: accentColor,
        roughness: 0.6,
        metalness: 0.2,
    })

    useFrame((state, delta) => {
        if (!meshRef.current) return
        timeRef.current += delta

        // Bob animation
        const baseY = position[1]
        meshRef.current.position.y = baseY + Math.sin(timeRef.current + index * 0.7) * 0.08

        // Slow rotation
        meshRef.current.rotation.y += delta * 0.15

        // Scale spring toward hovered state
        const targetScale = hovered ? 1.18 : 1.0
        scaleRef.current += (targetScale - scaleRef.current) * Math.min(delta * 6, 1)
        meshRef.current.scale.setScalar(scaleRef.current)

        // Emissive highlight on hover
        const mats = meshRef.current.material as THREE.MeshStandardMaterial[]
        if (mats && mats[0]) {
            const emTarget = hovered ? 0.4 : 0
            mats[0].emissiveIntensity += (emTarget - mats[0].emissiveIntensity) * Math.min(delta * 6, 1)
            mats[0].emissive.set(accentColor)
        }
    })

    return (
        <mesh
            ref={meshRef}
            position={position}
            rotation={[-Math.PI / 2, 0, Math.PI / 6]}
            material={[sideMaterial, topMaterial, bottomMaterial]}
            onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
            onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
        >
            <cylinderGeometry args={[0.85, 0.85, 0.2, 6]} />
            {hovered && (
                <Html
                    center
                    position={[0, 1.2, 0]}
                    style={{ pointerEvents: 'none' }}
                >
                    <div style={{
                        background: `${accentColor}22`,
                        border: `1px solid ${accentColor}88`,
                        color: '#fff',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        backdropFilter: 'blur(8px)',
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    }}>
                        {label}
                    </div>
                </Html>
            )}
        </mesh>
    )
}

export default function HexTile(props: HexTileProps) {
    return <HexTileInner {...props} />
}
