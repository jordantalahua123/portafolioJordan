'use client'

import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import dynamic from 'next/dynamic'

const GlobalBackground3D = dynamic(
    () => import('@/components/3d/backgrounds/GlobalBackground3D'),
    { ssr: false, loading: () => null }
)

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    return (
        <div className="min-h-screen transition-colors" style={{ color: colors.foreground }}>
            <GlobalBackground3D />
            <div className="h-screen flex overflow-hidden relative" style={{ zIndex: 1 }}>
                {/* Sidebar */}
                <aside
                    className="hidden lg:flex lg:flex-col w-[15%] min-w-[300px] max-w-[400px] shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: `${colors.muted}cc` }}
                >
                    <Sidebar />
                </aside>

                {/* Right: Navbar + Content */}
                <div className="flex-1 flex flex-col min-w-0">
                    <header
                        className="flex-shrink-0 shadow-sm backdrop-blur-sm"
                        style={{ backgroundColor: `${colors.muted}cc` }}
                    >
                        <Navbar />
                    </header>

                    <main
                        className="flex-1 overflow-y-auto p-6 lg:p-8"
                        style={{ backgroundColor: `${colors.backgroundMuted}99` }}
                    >
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
