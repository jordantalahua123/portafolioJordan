'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThemeIsDark } from '@/components/3d/shared/useThemeIsDark'
import { useIsMobile } from '@/components/3d/shared/useIsMobile'
import SpaceScene from './SpaceScene'
import CloudsScene from './CloudsScene'

export default function GlobalBackground3D() {
    const isDark = useThemeIsDark()
    const isMobile = useIsMobile()

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {/* Instant CSS gradient fallback */}
            <div
                className="absolute inset-0 transition-colors duration-700"
                style={{
                    background: isDark
                        ? 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 60%, #050510 100%)'
                        : 'linear-gradient(160deg, #4fb4ff 0%, #87CEEB 40%, #c9eeff 100%)'
                }}
            />
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, isMobile ? 1.2 : 1.75]}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                style={{ position: 'absolute', inset: 0 }}
            >
                <Suspense fallback={null}>
                    <SpaceScene isDark={isDark} isMobile={isMobile} />
                    <CloudsScene isDark={isDark} isMobile={isMobile} />
                </Suspense>
            </Canvas>
        </div>
    )
}
