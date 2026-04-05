'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'

const SkillsHexGrid = dynamic(
    () => import('@/components/3d/skills/SkillsHexGrid'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center opacity-60">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mx-auto mb-4" />
                    <p className="text-sm">Loading 3D Skills...</p>
                </div>
            </div>
        ),
    }
)

export default function Skills3D() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [containerHeight, setContainerHeight] = useState(600)

    useEffect(() => {
        const adjust = () => setContainerHeight(window.innerHeight - 64)
        adjust()
        window.addEventListener('resize', adjust)
        return () => window.removeEventListener('resize', adjust)
    }, [])

    return (
        <div
            id="scene-container"
            className="w-full relative flex flex-col"
            style={{ height: containerHeight }}
        >
            {/* Header */}
            <div className="relative z-10 pt-6 pb-2 text-center">
                <h2
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: colors.foreground }}
                >
                    {t('skills.title')}
                </h2>
                <p className="text-sm opacity-60" style={{ color: colors.foreground }}>
                    {t('skills.subtitle')}
                </p>
            </div>

            {/* 3D hex grid fills remaining space */}
            <div className="flex-1">
                <SkillsHexGrid />
            </div>
        </div>
    )
}
