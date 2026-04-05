'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Earth from './Earth'
import Ribbons from './Ribbons'
import CanvasLoader from '@/components/3d/shared/CanvasLoader'

export default function HeroGlobe() {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: 320 }}>
            <Canvas
                shadows
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Earth />
                    <Ribbons />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}
