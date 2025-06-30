'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Home, FileText, Briefcase, BookOpen, Mail, Sun, Moon, ChevronDown, Menu, X, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useNavigation } from '@/hooks/useNavigation'
import { navigationItems } from '@/lib/utils'
import { cn } from '@/lib/utils'
import Sidebar from './Sidebar'
import { theme } from '@/lib/theme'

const iconMap = {
    Home,
    GraduationCap,
    FileText,
    Briefcase,
    BookOpen,
    Mail,
}

export default function Navbar() {
    const { theme: currentTheme, setTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()
    const { activeSection, navigateTo } = useNavigation()
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleThemeToggle = () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
    ]

    if (!mounted) {
        return null
    }

    return (
        <>
            <nav className="px-6 py-4" style={{ backgroundColor: colors.background, color: colors.foreground }}>
                <div className="flex items-center justify-between">
                    {/* Logo/Brand + Hamburger para sidebar - Solo en móvil */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            style={{ backgroundColor: colors.muted }}
                            className="p-2 rounded-lg"
                        >
                            <Menu size={18} />
                        </button>
                        <h2 className="text-xl font-bold">JT</h2>
                    </div>

                    {/* Navegación Desktop */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navigationItems.map((item) => {
                            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                            const isActive = activeSection === item.id

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => navigateTo(item.id)}
                                    style={{ 
                                        backgroundColor: isActive ? colors.primary : 'transparent',
                                        color: isActive ? colors.background : colors.foreground
                                    }}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
                                        !isActive && "hover:bg-opacity-10"
                                    )}
                                >
                                    <IconComponent size={18} />
                                    <span className="font-medium">
                                        {t(item.labelKey)}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Controles (Theme + Language + Menu móvil) */}
                    <div className="flex items-center gap-4">
                        {/* Selector de idioma */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                style={{ backgroundColor: colors.muted }}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                            >
                                <span>{languages.find(lang => lang.code === language)?.flag}</span>
                                <span className="text-sm font-medium">
                                    {language.toUpperCase()}
                                </span>
                                <ChevronDown size={14} className={cn(
                                    "transition-transform",
                                    isLangOpen && "rotate-180"
                                )} />
                            </button>

                            {isLangOpen && (
                                <div style={{ backgroundColor: colors.background }} 
                                    className="absolute top-full right-0 mt-2 w-32 rounded-lg shadow-lg border border-opacity-10 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                toggleLanguage(lang.code as 'es' | 'en')
                                                setIsLangOpen(false)
                                            }}
                                            style={{ 
                                                backgroundColor: language === lang.code ? colors.primary : 'transparent',
                                                color: language === lang.code ? colors.background : colors.foreground
                                            }}
                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg"
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Toggle de tema */}
                        <button
                            onClick={handleThemeToggle}
                            style={{ backgroundColor: colors.muted }}
                            className="p-2 rounded-lg transition-colors"
                        >
                            {currentTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        {/* Menú hamburger para navegación - Solo móvil */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{ backgroundColor: colors.muted }}
                            className="lg:hidden p-2 rounded-lg"
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Menú móvil para navegación */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t" style={{ borderColor: colors.muted }}>
                        <div className="space-y-2">
                            {navigationItems.map((item) => {
                                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                                const isActive = activeSection === item.id

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            navigateTo(item.id)
                                            setIsMenuOpen(false)
                                        }}
                                        style={{ 
                                            backgroundColor: isActive ? colors.primary : 'transparent',
                                            color: isActive ? colors.background : colors.foreground
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                                    >
                                        <IconComponent size={18} />
                                        <span className="font-medium">
                                            {t(item.labelKey)}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </nav>

            {/* Drawer móvil para sidebar */}
            {isSidebarOpen && (
                <>
                    {/* Overlay */}
                    <div 
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    
                    {/* Drawer */}
                    <div style={{ backgroundColor: colors.background }} 
                        className="lg:hidden fixed left-0 top-0 h-full w-80 shadow-xl z-50 transform transition-transform duration-300">
                        <div style={{ borderColor: colors.muted }} 
                            className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                                {t("sidebar.profileDrawer")}
                            </h3>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                style={{ backgroundColor: colors.muted }}
                                className="p-2 rounded-lg"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="h-full pb-16">
                            <Sidebar />
                        </div>
                    </div>
                </>
            )}
        </>
    )
} 