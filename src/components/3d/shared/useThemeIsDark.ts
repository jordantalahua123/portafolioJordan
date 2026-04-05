'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function useThemeIsDark(): boolean {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return true // default dark until hydrated
    return (resolvedTheme ?? theme) === 'dark'
}
