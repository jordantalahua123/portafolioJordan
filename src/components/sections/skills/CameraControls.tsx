import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface CameraControlsProps {
    speed?: number
}

export default function CameraControls({ speed = 5 }: CameraControlsProps) {
    const { camera } = useThree()
    const controlsRef = useRef<any>(null)
    const [isMounted, setIsMounted] = useState(false)
    
    // Solo montar en el cliente
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // No renderizar nada hasta que esté montado en el cliente
    if (!isMounted) {
        return null
    }

    return (
        <OrbitControls
            ref={controlsRef}
            makeDefault
            target={[0, 0, 0]}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.1}
            minDistance={10}
            maxDistance={250}
            enableDamping
            dampingFactor={0.05}
        />
    )
} 