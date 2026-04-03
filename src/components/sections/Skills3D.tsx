'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { sceneColors } from './skills/colors'
import { useEffect, useState } from 'react'

// Cargar el Canvas de forma dinámica para evitar problemas de SSR en Next.js 15
const DynamicScene = dynamic(() => import('@/components/sections/skills/Scene'), {
    ssr: false,
    loading: () => {
        // Usamos un método seguro para acceder al tema en el cliente
        const getTheme = () => {
            if (typeof window !== 'undefined') {
                return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
            }
            return 'light'
        }
        
        const currentTheme = getTheme()
        const colors = sceneColors[currentTheme]
        
        return (
            <div className="w-full h-full flex items-center justify-center"
                style={{
                    background: `linear-gradient(180deg, ${colors.sky.primary} 0%, ${colors.sky.secondary} 50%, ${colors.sky.horizon} 100%)`
                }}
            >
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colors.ui.loading }}>
                        🤠 Cargando el Desierto... 🤠
                    </h3>
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 mx-auto" style={{ borderColor: colors.ui.border }}></div>
                </div>
            </div>
        )
    }
})

export default function Skills3D() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
        
        // Función para ajustar la altura del contenedor al tamaño disponible
        const adjustHeight = () => {
            const container = document.getElementById('scene-container')
            if (container) {
                // Calculamos la altura disponible (altura de la ventana - altura del navbar)
                // Aproximadamente 64px para el navbar
                const availableHeight = window.innerHeight - 64
                container.style.height = `${availableHeight}px`
            }
        }
        
        // Ajustar altura inicial
        adjustHeight()
        
        // Ajustar altura cuando cambie el tamaño de la ventana
        window.addEventListener('resize', adjustHeight)
        
        // Limpiar el event listener cuando se desmonte el componente
        return () => {
            window.removeEventListener('resize', adjustHeight)
        }
    }, [])
    
    const theme = currentTheme === 'dark' ? 'dark' : 'light'
    const colors = sceneColors[theme]
    
    if (!mounted) {
        return (
            <div className="w-full h-full flex items-center justify-center"
                style={{
                    background: `linear-gradient(180deg, ${colors.sky.primary} 0%, ${colors.sky.secondary} 50%, ${colors.sky.horizon} 100%)`
                }}
            >
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colors.ui.loading }}>
                        🤠 Inicializando... 🤠
                    </h3>
                </div>
            </div>
        )
    }

    return (
        <div 
            id="scene-container"
            className="w-full relative" 
            style={{ 
                background: `linear-gradient(180deg, ${colors.sky.primary} 0%, ${colors.sky.secondary} 50%, ${colors.sky.horizon} 100%)`,
                height: '600px' // Altura inicial, se ajustará con JavaScript
            }}
        >
            {/* Header con información del viejo oeste */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2"
                    style={{ fontFamily: 'serif', color: colors.ui.title }}>
                    🤠 WILD WEST SKILLS TOWN 🤠
                </h2>
                <p className="text-sm md:text-base text-center opacity-80 mb-4"
                    style={{ color: colors.ui.subtitle }}>
                    Explora mis habilidades en un pueblo del viejo oeste
                </p>
            </div>
            
            {/* Escena 3D cargada dinámicamente - aseguramos que ocupe todo el espacio */}
            <div className="absolute inset-0">
                <DynamicScene />
            </div>
        </div>
    )
}