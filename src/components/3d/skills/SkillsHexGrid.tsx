'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { hexLayout } from './skillsData'
import HexTile from './HexTile'
import { useThemeIsDark } from '@/components/3d/shared/useThemeIsDark'
import { useIsMobile } from '@/components/3d/shared/useIsMobile'

function HexGrid({ isDark }: { isDark: boolean }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={isDark ? 0.4 : 0.7} />
            <directionalLight
                position={[5, 8, 5]}
                intensity={isDark ? 1.2 : 1.6}
                castShadow={false}
            />
            <pointLight
                position={[-4, 4, 3]}
                color={isDark ? '#a78bfa' : '#ffffff'}
                intensity={isDark ? 1.5 : 0.8}
                distance={20}
            />
            <pointLight
                position={[4, -2, 3]}
                color={isDark ? '#60a5fa' : '#fbbf24'}
                intensity={isDark ? 1.0 : 0.6}
                distance={15}
            />

            {/* Hex tiles */}
            <Suspense fallback={null}>
                {hexLayout.map((skill) => (
                    <HexTile
                        key={skill.id}
                        position={skill.position}
                        logo={skill.logo}
                        accentColor={skill.accentColor}
                        label={skill.label}
                        index={skill.index}
                    />
                ))}
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.6}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 3}
            />
        </>
    )
}

export default function SkillsHexGrid() {
    const isDark = useThemeIsDark()
    const isMobile = useIsMobile()

    return (
        <div style={{ width: '100%', height: '100%', minHeight: 420 }}>
            <Canvas
                camera={{ position: [0, 2, 7], fov: isMobile ? 65 : 55 }}
                dpr={[1, isMobile ? 1.2 : 1.75]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
            >
                <HexGrid isDark={isDark} />
            </Canvas>
        </div>
    )
}
