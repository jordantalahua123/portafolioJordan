'use client'

import { useState, useEffect } from 'react'

interface PerformanceResult {
    canRender3D: boolean
    isLowEnd: boolean
}

export function usePerformance(): PerformanceResult {
    const [result, setResult] = useState<PerformanceResult>({
        canRender3D: false,
        isLowEnd: false
    })

    useEffect(() => {
        const cores = navigator.hardwareConcurrency || 2
        const memory = (navigator as any).deviceMemory || 4
        const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent)
        const isLowEnd = cores < 4 || memory < 4

        setResult({
            canRender3D: !isMobile && !isLowEnd,
            isLowEnd
        })
    }, [])

    return result
}
