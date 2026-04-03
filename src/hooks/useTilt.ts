'use client'

import { useRef, useCallback } from 'react'

interface TiltOptions {
    maxTilt?: number
    perspective?: number
    scale?: number
    speed?: number
}

export function useTilt(options: TiltOptions = {}) {
    const {
        maxTilt = 8,
        perspective = 1000,
        scale = 1.02,
        speed = 400
    } = options

    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const tiltX = ((y - centerY) / centerY) * -maxTilt
        const tiltY = ((x - centerX) / centerX) * maxTilt

        el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
        el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`
    }, [maxTilt, perspective, scale, speed])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return

        el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
    }, [perspective, speed])

    return { ref, handleMouseMove, handleMouseLeave }
}
