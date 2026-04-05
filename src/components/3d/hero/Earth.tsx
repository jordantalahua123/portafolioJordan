'use client'

import { useGLTF } from '@react-three/drei'

export default function Earth() {
    const earth = useGLTF('/planet/scene.gltf')

    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
        />
    )
}

useGLTF.preload('/planet/scene.gltf')
