'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Home, FileText, Briefcase, BookOpen, Mail, Sun, Moon, ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigation } from '@/hooks/useNavigation'
import { navigationItems } from '@/lib/utils'
import { cn } from '@/lib/utils'
import Sidebar from './Sidebar'

const iconMap = {
    Home,
    FileText,
    Briefcase,
    BookOpen,
    Mail,
}

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()
    const { activeSection, navigateTo } = useNavigation()
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
    ]

    return (
        <>
            <nav className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand + Hamburger para sidebar - Solo en móvil */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                            <Menu size={18} />
                        </button>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">JT</h2>
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
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
                                        isActive
                                            ? "bg-pink-500 text-white shadow-lg"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                toggleLanguage(lang.code as 'es' | 'en')
                                                setIsLangOpen(false)
                                            }}
                                            className={cn(
                                                "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                                                "first:rounded-t-lg last:rounded-b-lg",
                                                language === lang.code && "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400"
                                            )}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Toggle de tema */}
                        {mounted && (
                            <button
                                onClick={handleThemeToggle}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                            </button>
                        )}

                        {/* Menú hamburger para navegación - Solo móvil */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Menú móvil para navegación */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
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
                                        className={cn(
                                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                                            isActive
                                                ? "bg-pink-500 text-white shadow-lg"
                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                    <div className="lg:hidden fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("sidebar.profileDrawer")}</h3>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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