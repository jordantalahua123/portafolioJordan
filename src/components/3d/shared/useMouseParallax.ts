'use client'

import { useRef, useEffect } from 'react'

export function useMouseParallax() {
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener('pointermove', handleMove)
        return () => window.removeEventListener('pointermove', handleMove)
    }, [])

    return mouse
}
