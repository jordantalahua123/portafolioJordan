'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Floor from './floor'
import CameraControls from './CameraControls'
import Car from './Car'
import { Physics } from '@react-three/rapier'
import { Html, Sky } from '@react-three/drei'
import { useTheme } from 'next-themes'
import { sceneColors } from './colors'

// Componente de loading para Three.js
function SceneLoading() {
    const { theme: currentTheme } = useTheme()
    const theme = currentTheme === 'dark' ? 'dark' : 'light'
    const colors = sceneColors[theme]
    
    return (
        <Html center>
            <div className="text-center" style={{ color: theme === 'dark' ? '#ffd54f' : '#e65100' }}>
                <div className="animate-pulse text-xl">🏜️ Construyendo el desierto...</div>
            </div>
        </Html>
    )
}

export default function Scene() {
    const { theme: currentTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    const theme = currentTheme === 'dark' ? 'dark' : 'light'
    const colors = sceneColors[theme]
    
    // Si no está montado, mostramos un div con el color de fondo adecuado
    if (!mounted) {
        return (
            <div className="w-full h-full" style={{ 
                background: `linear-gradient(180deg, ${colors.sky.primary} 0%, ${colors.sky.secondary} 50%, ${colors.sky.horizon} 100%)`
            }}></div>
        )
    }
    
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [50, 30, 50], fov: 60 }}
                style={{ 
                    background: `linear-gradient(180deg, ${colors.sky.primary} 0%, ${colors.sky.secondary} 50%, ${colors.sky.horizon} 100%)`,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
                shadows
                gl={{ 
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
            >
                {/* Cielo */}
                {theme === 'dark' ? (
                    <color attach="background" args={[colors.sky.primary]} />
                ) : (
                    <color attach="background" args={[colors.sky.primary]} />
                )}
                
                <Suspense fallback={<SceneLoading />}>
                    {/* Iluminación del desierto */}
                    <ambientLight 
                        intensity={colors.lighting.intensity.ambient} 
                        color={colors.lighting.ambient} 
                    />
                    <directionalLight 
                        position={[10, 20, 5]} 
                        intensity={colors.lighting.intensity.directional}
                        color={colors.lighting.directional}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-camera-far={50}
                        shadow-camera-left={-50}
                        shadow-camera-right={50}
                        shadow-camera-top={50}
                        shadow-camera-bottom={-50}
                    />
                    
                    {/* Luz adicional para mejor visibilidad */}
                    <pointLight
                        position={[-10, 15, -10]}
                        intensity={colors.lighting.intensity.point}
                        color={colors.lighting.point}
                        castShadow
                    />
                    
                    {/* Luces adicionales para modo oscuro */}
                    {theme === 'dark' && (
                        <>
                            <spotLight
                                position={[0, 30, 0]}
                                intensity={1.2}
                                color="#9575cd"
                                angle={0.6}
                                penumbra={0.5}
                                castShadow
                            />
                            <hemisphereLight
                                intensity={0.6}
                                color="#b39ddb"
                                groundColor="#4527a0"
                            />
                            <pointLight
                                position={[20, 15, 20]}
                                intensity={0.8}
                                color="#7e57c2"
                                castShadow
                                distance={60}
                            />
                        </>
                    )}
                    
                    <Physics gravity={[0, -9.81, 0]}>
                        {/* Piso del desierto */}
                        <Floor />
                        
                        {/* Auto controlable */}
                        <Car />
                    </Physics>
                    
                    {/* Controles de cámara */}
                    <CameraControls speed={10} />
                </Suspense>
            </Canvas>

            {/* Instrucciones de navegación */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-xs md:text-sm text-amber-200">
                <div className="bg-amber-900/50 backdrop-blur-sm rounded-lg p-3 border border-amber-600/30">
                    <p className="mb-2">🎮 <strong>CONTROLES:</strong></p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs">
                        <span>Click Izquierdo + Arrastrar = Rotar Cámara</span>
                        <span>Click Derecho + Arrastrar = Mover Cámara</span>
                        <span>Scroll = Zoom</span>
                        <span><strong>W, A, S, D</strong> = Mover Auto</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 