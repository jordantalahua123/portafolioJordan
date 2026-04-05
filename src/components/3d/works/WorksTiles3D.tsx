'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useThemeIsDark } from '@/components/3d/shared/useThemeIsDark'

interface Project {
    id: string
    title: string
    description: string
    color: string
    icon: string
    links: { url: string; label: string }[]
}

interface TileProps {
    project: Project
    position: [number, number, number]
    index: number
}

function ProjectTile({ project, position, index }: TileProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const { mouse } = useThree()
    const targetRot = useRef({ x: 0, y: 0 })
    const scaleRef = useRef(1)

    useFrame((_, delta) => {
        if (!meshRef.current) return

        // Tilt toward mouse when hovered
        if (hovered) {
            targetRot.current.x = -mouse.y * 0.3
            targetRot.current.y = mouse.x * 0.3
        } else {
            targetRot.current.x = 0
            targetRot.current.y = 0
        }

        meshRef.current.rotation.x += (targetRot.current.x - meshRef.current.rotation.x) * Math.min(delta * 5, 1)
        meshRef.current.rotation.y += (targetRot.current.y - meshRef.current.rotation.y) * Math.min(delta * 5, 1)

        // Gentle float
        meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001 + index * 1.2) * 0.05

        // Scale spring
        const targetScale = hovered ? 1.06 : 1.0
        scaleRef.current += (targetScale - scaleRef.current) * Math.min(delta * 6, 1)
        meshRef.current.scale.setScalar(scaleRef.current)
    })

    const color = new THREE.Color(project.color)

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
            onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
        >
            <planeGeometry args={[2.6, 1.8]} />
            <meshStandardMaterial
                color={hovered ? color : color.clone().multiplyScalar(0.7)}
                roughness={0.3}
                metalness={0.2}
                transparent
                opacity={0.9}
                side={THREE.DoubleSide}
            />
            <Html
                center
                style={{
                    width: 220,
                    pointerEvents: hovered ? 'auto' : 'none',
                    userSelect: 'none',
                }}
            >
                <div style={{
                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                    border: `1px solid ${project.color}55`,
                    borderRadius: 16,
                    padding: '14px 16px',
                    backdropFilter: 'blur(16px)',
                    color: '#fff',
                    textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                }}>
                    <div style={{ fontSize: 28, marginBottom: 4 }}>{project.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{project.title}</div>
                    <div style={{ fontSize: 11, opacity: 0.75, marginBottom: 8, lineHeight: 1.4 }}>
                        {project.description.slice(0, 60)}…
                    </div>
                    {hovered && (
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        fontSize: 11,
                                        padding: '3px 8px',
                                        borderRadius: 6,
                                        background: project.color,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </Html>
        </mesh>
    )
}

function WorksScene({ projects, isDark }: { projects: Project[]; isDark: boolean }) {
    // Grid layout: up to 3 per row
    const cols = 3
    const spacing = { x: 3.2, y: 2.4 }

    return (
        <>
            <ambientLight intensity={isDark ? 0.4 : 0.7} />
            <directionalLight position={[5, 5, 5]} intensity={isDark ? 1.0 : 1.4} />
            <pointLight position={[-5, 3, 3]} color={isDark ? '#a78bfa' : '#fbbf24'} intensity={1.0} distance={20} />

            {projects.map((project, i) => {
                const col = i % cols
                const row = Math.floor(i / cols)
                const totalCols = Math.min(projects.length, cols)
                const x = (col - (totalCols - 1) / 2) * spacing.x
                const y = -(row * spacing.y) + (Math.floor(projects.length / cols) * spacing.y) / 2
                return (
                    <ProjectTile
                        key={project.id}
                        project={project}
                        position={[x, y, 0]}
                        index={i}
                    />
                )
            })}
        </>
    )
}

export default function WorksTiles3D({ projects }: { projects: Project[] }) {
    const isDark = useThemeIsDark()
    const rows = Math.ceil(projects.length / 3)

    return (
        <div style={{ width: '100%', height: Math.max(380, rows * 240) }}>
            <Canvas
                camera={{ position: [0, 0, 7], fov: 55 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                tabIndex={-1}
            >
                <WorksScene projects={projects} isDark={isDark} />
            </Canvas>
        </div>
    )
}
