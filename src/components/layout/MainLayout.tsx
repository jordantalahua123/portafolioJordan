'use client'

import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    return (
        <div className="min-h-screen transition-colors" style={{ backgroundColor: colors.background, color: colors.foreground }}>
            <div className="h-screen flex overflow-hidden">
                {/* Sidebar - Fijo en altura completa, responsive en ancho */}
                <aside className="hidden lg:flex lg:flex-col w-[15%] min-w-[300px] max-w-[400px] shadow-lg" style={{ backgroundColor: colors.muted }}>
                    <Sidebar />
                </aside>

                {/* Área derecha - Navbar + Contenido */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Navbar - Fijo en la parte superior */}
                    <header className="flex-shrink-0 shadow-sm" style={{ backgroundColor: colors.muted }}>
                        <Navbar />
                    </header>

                    {/* Contenido principal - Con scroll independiente */}
                    <main className="flex-1 overflow-y-auto p-6 lg:p-8" style={{ backgroundColor: colors.backgroundMuted }}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
} 