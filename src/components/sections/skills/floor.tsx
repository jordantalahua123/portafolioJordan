'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useTheme } from 'next-themes'
import { sceneColors } from './colors'

export default function Floor() {
    const meshRef = useRef<THREE.Mesh>(null)
    const { theme: currentTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    const theme = currentTheme === 'dark' ? 'dark' : 'light'
    const colors = sceneColors[theme]

    // Generación del terreno
    const { positions, normals, indices, colors: vertexColors } = useMemo(() => {
        const gridSize = 100
        const segments = 128
        const positions = []
        const normals = []
        const indices = []
        const colors = []
        
        // Obtener colores del tema actual
        const terrainColors = {
            base: sceneColors[theme].terrain.base,
            dunes: sceneColors[theme].terrain.dunes,
            highlights: sceneColors[theme].terrain.highlights,
            pyramids: sceneColors[theme].terrain.pyramids
        }
        
        // Crear vértices y normales
        for (let i = 0; i <= segments; i++) {
            const z = (i / segments - 0.5) * gridSize
            for (let j = 0; j <= segments; j++) {
                const x = (j / segments - 0.5) * gridSize
                
                // Generar altura usando múltiples capas de ruido
                const frequency = 0.02
                const pyramidHeight = Math.max(
                    0,
                    20 - Math.sqrt(Math.pow(x - 20, 2) + Math.pow(z - 20, 2))
                ) * 0.5 + Math.max(
                    0,
                    15 - Math.sqrt(Math.pow(x + 15, 2) + Math.pow(z - 15, 2))
                ) * 0.3

                const duneHeight = Math.sin(x * frequency) * Math.cos(z * frequency) * 5
                    + Math.sin(x * frequency * 2) * Math.cos(z * frequency * 2) * 2.5
                    + Math.sin(x * frequency * 4) * Math.cos(z * frequency * 4) * 1.25

                const height = duneHeight + pyramidHeight
                
                positions.push(x, height, z)
                
                // Calcular normales
                const nx = Math.cos(x * frequency) * Math.sin(z * frequency)
                const ny = 1
                const nz = Math.sin(x * frequency) * Math.cos(z * frequency)
                const length = Math.sqrt(nx * nx + ny * ny + nz * nz)
                normals.push(nx / length, ny / length, nz / length)

                // Asignar colores basados en la altura y posición
                const baseColor = new THREE.Color(terrainColors.base)
                const duneColor = new THREE.Color(terrainColors.dunes)
                const highlightColor = new THREE.Color(terrainColors.highlights)
                const pyramidColor = new THREE.Color(terrainColors.pyramids)

                const heightFactor = (height + 10) / 20 // Normalizar altura
                const colorFactor = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 0.5 + 0.5

                const finalColor = new THREE.Color()
                if (height > 5) {
                    // Para las partes más altas (pirámides)
                    finalColor.lerpColors(pyramidColor, highlightColor, heightFactor * 0.5)
                } else {
                    // Para el terreno normal
                    finalColor.lerpColors(baseColor, duneColor, colorFactor)
                }

                colors.push(finalColor.r, finalColor.g, finalColor.b)
            }
        }
        
        // Crear índices para los triángulos
        for (let i = 0; i < segments; i++) {
            for (let j = 0; j < segments; j++) {
                const a = i * (segments + 1) + j
                const b = a + 1
                const c = a + (segments + 1)
                const d = c + 1
                
                indices.push(a, b, c)
                indices.push(b, d, c)
            }
        }
        
        return {
            positions: new Float32Array(positions),
            normals: new Float32Array(normals),
            indices: new Uint32Array(indices),
            colors: new Float32Array(colors)
        }
    }, [theme])

    // Crear la geometría del terreno
    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(vertexColors, 3))
        geometry.setIndex(new THREE.BufferAttribute(indices, 1))
        return geometry
    }, [positions, normals, indices, vertexColors])

    // Si no está montado, no renderizamos nada
    if (!mounted) return null

    // Color base para el material
    const materialColor = theme === 'dark' ? '#bcaaa4' : '#d7ccc8'

    return (
        <RigidBody type="fixed" colliders="trimesh">
            <mesh
                ref={meshRef}
                geometry={geometry}
                receiveShadow
                castShadow
            >
                <meshStandardMaterial 
                    vertexColors
                    color={materialColor}
                    roughness={theme === 'dark' ? 0.6 : 0.8}
                    metalness={theme === 'dark' ? 0.3 : 0.2}
                    side={THREE.DoubleSide}
                    emissive={theme === 'dark' ? '#8d6e63' : '#00000000'}
                    emissiveIntensity={theme === 'dark' ? 0.5 : 0}
                />
            </mesh>
        </RigidBody>
    )
}
