'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import * as THREE from 'three'

interface SkillSphereProps {
    position: [number, number, number]
    skill: string
    level: number
    color: string
    category: string
}

function SkillSphere({ position, skill, level, color, category }: SkillSphereProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const { theme: currentTheme } = useTheme()
    
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
        }
    })

    const radius = 0.3 + (level / 10) * 0.4
    const textColor = currentTheme === 'dark' ? '#ffffff' : '#000000'

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <Sphere
                    ref={meshRef}
                    args={[radius, 32, 32]}
                    onPointerEnter={() => setHovered(true)}
                    onPointerLeave={() => setHovered(false)}
                    scale={hovered ? 1.2 : 1}
                >
                    <meshStandardMaterial
                        color={color}
                        transparent
                        opacity={0.8}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.3 : 0.1}
                        roughness={0.3}
                        metalness={0.1}
                    />
                </Sphere>
                
                <Text
                    position={[0, 0, radius + 0.2]}
                    fontSize={0.12}
                    color={textColor}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.01}
                    outlineColor={currentTheme === 'dark' ? '#000000' : '#ffffff'}
                >
                    {skill}
                </Text>
                
                {hovered && (
                    <Text
                        position={[0, -radius - 0.3, 0]}
                        fontSize={0.08}
                        color={currentTheme === 'dark' ? '#888' : '#666'}
                        anchorX="center"
                        anchorY="middle"
                    >
                        {category} • Nivel {level}/10
                    </Text>
                )}
            </group>
        </Float>
    )
}

function SkillsScene() {
    const skills = [
        // Frontend
        { name: "React", level: 9, category: "Frontend", position: [-3, 2, 0] as [number, number, number], color: "#61DAFB" },
        { name: "Next.js", level: 8, category: "Frontend", position: [-1, 2.5, 1] as [number, number, number], color: "#000000" },
        { name: "Vue.js", level: 7, category: "Frontend", position: [-2, 1, -1] as [number, number, number], color: "#4FC08D" },
        { name: "TypeScript", level: 8, category: "Frontend", position: [-0.5, 1.8, 0.5] as [number, number, number], color: "#3178C6" },
        { name: "Tailwind", level: 9, category: "Frontend", position: [-3.5, 0.5, 1] as [number, number, number], color: "#06B6D4" },
        
        // Backend
        { name: "Node.js", level: 8, category: "Backend", position: [1, 2, 0] as [number, number, number], color: "#339933" },
        { name: "Express", level: 8, category: "Backend", position: [2.5, 1.5, -0.5] as [number, number, number], color: "#000000" },
        { name: "Python", level: 7, category: "Backend", position: [1.5, 0.8, 1] as [number, number, number], color: "#3776AB" },
        { name: "Django", level: 6, category: "Backend", position: [3, 0.2, 0.5] as [number, number, number], color: "#092E20" },
        { name: "Laravel", level: 6, category: "Backend", position: [0.8, 2.8, -1] as [number, number, number], color: "#FF2D20" },
        
        // Bases de Datos
        { name: "PostgreSQL", level: 8, category: "Database", position: [-1, -1, 0] as [number, number, number], color: "#336791" },
        { name: "MongoDB", level: 7, category: "Database", position: [1, -1.5, 1] as [number, number, number], color: "#47A248" },
        { name: "MySQL", level: 8, category: "Database", position: [-2.5, -0.8, -1] as [number, number, number], color: "#4479A1" },
        { name: "Firebase", level: 7, category: "Database", position: [2, -0.5, -0.5] as [number, number, number], color: "#FFCA28" },
        
        // DevOps
        { name: "Docker", level: 7, category: "DevOps", position: [0, -2.5, 0] as [number, number, number], color: "#2496ED" },
        { name: "Jenkins", level: 6, category: "DevOps", position: [-1.5, -2, 1] as [number, number, number], color: "#D33833" },
        { name: "Azure", level: 6, category: "DevOps", position: [1.8, -2.8, -1] as [number, number, number], color: "#0078D4" },
        { name: "Git", level: 9, category: "DevOps", position: [-0.5, -3, 0.8] as [number, number, number], color: "#F05032" },
        
        // Mobile & Tools
        { name: "Flutter", level: 7, category: "Mobile", position: [3.5, 2.5, 0] as [number, number, number], color: "#02569B" },
        { name: "Unity", level: 6, category: "Mobile", position: [4, 1, -1] as [number, number, number], color: "#000000" },
        { name: "Figma", level: 8, category: "Design", position: [3.2, -1.2, 1] as [number, number, number], color: "#F24E1E" },
        { name: "Notion", level: 9, category: "Tools", position: [-4, -1.5, 0] as [number, number, number], color: "#000000" },
    ]

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {skills.map((skill) => (
                <SkillSphere
                    key={skill.name}
                    position={skill.position}
                    skill={skill.name}
                    level={skill.level}
                    color={skill.color}
                    category={skill.category}
                />
            ))}
            
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                minDistance={5}
                maxDistance={15}
            />
        </>
    )
}

export default function Skills3D() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    return (
        <div className="w-full h-screen min-h-[600px] relative">
            <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                    {t('skills.title')}
                </h2>
                <p className="text-sm md:text-base text-center opacity-70 mb-4">
                    {t('skills.subtitle')}
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                    <span className="px-2 py-1 md:px-3 md:py-1 rounded-full" style={{ backgroundColor: colors.muted }}>
                        {t('skills.categories.frontend')}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 rounded-full" style={{ backgroundColor: colors.muted }}>
                        {t('skills.categories.backend')}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 rounded-full" style={{ backgroundColor: colors.muted }}>
                        {t('skills.categories.database')}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 rounded-full" style={{ backgroundColor: colors.muted }}>
                        {t('skills.categories.devops')}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 rounded-full" style={{ backgroundColor: colors.muted }}>
                        {t('skills.categories.mobile')}
                    </span>
                </div>
            </div>
            
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                style={{ 
                    background: currentTheme === 'dark' 
                        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
                        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
                }}
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
            >
                <SkillsScene />
            </Canvas>
            
            <div className="absolute bottom-4 left-4 right-4 text-center text-xs md:text-sm opacity-60">
                {t('skills.instructions')}
            </div>
        </div>
    )
} 