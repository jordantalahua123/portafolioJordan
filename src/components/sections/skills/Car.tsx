'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody, useRapier } from '@react-three/rapier'
import { useTheme } from 'next-themes'
import { sceneColors } from './colors'
import { Html } from '@react-three/drei'

export default function Car() {
    const carRef = useRef<any>(null)
    const [movement, setMovement] = useState({ forward: 0, turn: 0 })
    const [keysPressed, setKeysPressed] = useState({
        w: false,
        a: false,
        s: false,
        d: false
    })
    // Aumentar considerablemente la velocidad y fuerza del auto
    const speed = 150  // Aumentado de 50 a 150
    const turnSpeed = 3  // Aumentado de 2 a 3
    const { rapier, world } = useRapier()
    const { theme: currentTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [focused, setFocused] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    const theme = currentTheme === 'dark' ? 'dark' : 'light'
    const colors = sceneColors[theme]

    // Efecto para actualizar el movimiento basado en las teclas presionadas
    useEffect(() => {
        // Calcular el movimiento basado en las teclas presionadas
        let forwardValue = 0;
        let turnValue = 0;
        
        if (keysPressed.w) forwardValue = 1;
        if (keysPressed.s) forwardValue = -1;
        if (keysPressed.a) turnValue = 1;
        if (keysPressed.d) turnValue = -1;
        
        setMovement({ forward: forwardValue, turn: turnValue });
    }, [keysPressed]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevenir comportamiento predeterminado para las teclas WASD
            if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
                e.preventDefault()
            }
            
            // Actualizar el estado de las teclas presionadas
            switch (e.code) {
                case 'KeyW':
                    setKeysPressed(prev => ({ ...prev, w: true }))
                    break
                case 'KeyS':
                    setKeysPressed(prev => ({ ...prev, s: true }))
                    break
                case 'KeyA':
                    setKeysPressed(prev => ({ ...prev, a: true }))
                    break
                case 'KeyD':
                    setKeysPressed(prev => ({ ...prev, d: true }))
                    break
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            // Actualizar el estado de las teclas liberadas
            switch (e.code) {
                case 'KeyW':
                    setKeysPressed(prev => ({ ...prev, w: false }))
                    break
                case 'KeyS':
                    setKeysPressed(prev => ({ ...prev, s: false }))
                    break
                case 'KeyA':
                    setKeysPressed(prev => ({ ...prev, a: false }))
                    break
                case 'KeyD':
                    setKeysPressed(prev => ({ ...prev, d: false }))
                    break
            }
        }

        // Función para manejar el clic en el canvas
        const handleCanvasClick = () => {
            setFocused(true)
        }

        // Función para manejar el clic fuera del canvas
        const handleDocumentClick = (e: MouseEvent) => {
            const canvas = document.querySelector('canvas')
            if (canvas && !canvas.contains(e.target as Node)) {
                setFocused(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        
        // Agregar eventos de clic
        const canvas = document.querySelector('canvas')
        if (canvas) {
            canvas.addEventListener('click', handleCanvasClick)
        }
        document.addEventListener('click', handleDocumentClick)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
            
            // Limpiar eventos de clic
            if (canvas) {
                canvas.removeEventListener('click', handleCanvasClick)
            }
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    useFrame((state, delta) => {
        if (!carRef.current || !focused) return

        const rigidBody = carRef.current
        const rotation = rigidBody.rotation()
        const position = rigidBody.translation()

        // Aplicar rotación
        if (movement.turn !== 0) {
            rigidBody.setAngvel({ x: 0, y: -movement.turn * turnSpeed, z: 0 })
        } else {
            rigidBody.setAngvel({ x: 0, y: 0, z: 0 })
        }

        // Aplicar movimiento con más fuerza
        if (movement.forward !== 0) {
            const forward = new THREE.Vector3(
                Math.sin(rotation.y),
                0,
                Math.cos(rotation.y)
            )
            
            // Aplicar un impulso más fuerte
            const impulse = forward.multiplyScalar(movement.forward * speed * delta)
            
            // Aplicar fuerza adicional para superar la fricción inicial
            const forceFactor = 2.0  // Factor de fuerza adicional
            rigidBody.applyImpulse({ 
                x: impulse.x * forceFactor, 
                y: 0, 
                z: impulse.z * forceFactor 
            }, true)
            
            // Aplicar una fuerza constante para mantener el movimiento
            rigidBody.applyForce({ 
                x: impulse.x * 10, 
                y: 0, 
                z: impulse.z * 10 
            }, true)
        }

        // Mantener el auto derecho (evitar que se vuelque)
        rigidBody.setRotation({ x: 0, y: rotation.y, z: 0 })
    })

    // Si no está montado, no renderizamos nada
    if (!mounted) return null

    return (
        <>
            <RigidBody
                ref={carRef}
                position={[0, 5, 0]}
                mass={0.8}  // Reducir masa para que sea más ligero
                type="dynamic"
                colliders="cuboid"
                linearDamping={0.2}  // Reducir amortiguación para que se deslice mejor
                angularDamping={0.5}
                friction={0.5}  // Ajustar fricción
                restitution={0.2}  // Añadir rebote ligero
            >
                {/* Cuerpo principal del auto */}
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[4, 1, 2]} />
                    <meshStandardMaterial 
                        color={colors.car.body}
                        roughness={0.3}
                        metalness={0.6}
                        emissive={theme === 'dark' ? colors.car.body : '#000000'}
                        emissiveIntensity={theme === 'dark' ? 0.3 : 0}
                    />
                </mesh>

                {/* Cabina */}
                <mesh position={[0, 0.8, 0]} castShadow>
                    <boxGeometry args={[2, 1, 1.5]} />
                    <meshStandardMaterial 
                        color={colors.car.cabin}
                        roughness={0.1}
                        metalness={0.8}
                        emissive={theme === 'dark' ? colors.car.cabin : '#000000'}
                        emissiveIntensity={theme === 'dark' ? 0.3 : 0}
                    />
                </mesh>

                {/* Detalles del auto */}
                <mesh position={[1.5, 0.5, 0]} castShadow>
                    <boxGeometry args={[0.5, 0.2, 1.8]} />
                    <meshStandardMaterial 
                        color={colors.car.details}
                        roughness={0.2}
                        metalness={0.9}
                        emissive={theme === 'dark' ? colors.car.details : '#000000'}
                        emissiveIntensity={theme === 'dark' ? 0.5 : 0}
                    />
                </mesh>

                {/* Ruedas */}
                <mesh position={[1.5, -0.3, 1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.4, 0.4, 0.4]} />
                    <meshStandardMaterial 
                        color={colors.car.wheels}
                        roughness={0.6}
                        metalness={0.4}
                    />
                </mesh>
                <mesh position={[1.5, -0.3, -1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.4, 0.4, 0.4]} />
                    <meshStandardMaterial 
                        color={colors.car.wheels}
                        roughness={0.6}
                        metalness={0.4}
                    />
                </mesh>
                <mesh position={[-1.5, -0.3, 1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.4, 0.4, 0.4]} />
                    <meshStandardMaterial 
                        color={colors.car.wheels}
                        roughness={0.6}
                        metalness={0.4}
                    />
                </mesh>
                <mesh position={[-1.5, -0.3, -1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.4, 0.4, 0.4]} />
                    <meshStandardMaterial 
                        color={colors.car.wheels}
                        roughness={0.6}
                        metalness={0.4}
                    />
                </mesh>
            </RigidBody>
        </>
    )
} 