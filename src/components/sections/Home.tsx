'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroGlobe = dynamic(() => import('@/components/3d/hero/HeroGlobe'), {
    ssr: false,
    loading: () => null,
})

const BallCanvas = dynamic(() => import('@/components/3d/skills/Ball'), {
    ssr: false,
    loading: () => null,
})

const technologies = [
    { name: 'React',       icon: '/logos/react.svg' },
    { name: 'TypeScript',  icon: '/logos/ts.svg' },
    { name: 'JavaScript',  icon: '/logos/js.svg' },
    { name: 'Node.js',     icon: '/logos/nodejs.svg' },
    { name: 'Tailwind',    icon: '/logos/tailwind.svg' },
    { name: 'MongoDB',     icon: '/logos/mongo.svg' },
    { name: 'Docker',      icon: '/logos/docker.svg' },
    { name: 'CSS',         icon: '/logos/css.svg' },
    { name: 'HTML',        icon: '/logos/html.svg' },
    { name: 'Git',         icon: '/logos/git.svg' },
    { name: 'Redux',       icon: '/logos/redux.svg' },
    { name: 'Three.js',    icon: '/logos/threejs.svg' },
    { name: 'Figma',       icon: '/logos/figma.svg' },
]

export default function Home() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [currentRole, setCurrentRole] = useState(0)
    const roles = [t('home.roles.role1'), t('home.roles.role2'), t('home.roles.role3')]

    const [isVisible, setIsVisible] = useState(false)
    const numberAnimation = useSpring({
        number: isVisible ? 4 : 0,
        from: { number: 0 },
        config: { duration: 2000 }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        setIsVisible(true)
        return () => clearInterval(interval)
    }, [roles.length])

    const metrics = [
        { number: 4,  label: t('home.metrics.experience'),    suffix: '+' },
        { number: 20, label: t('home.metrics.projects'),      suffix: '+' },
        { number: 4,  label: t('home.metrics.certifications'), suffix: '+' },
        { number: 40, label: t('home.metrics.technologies'),  suffix: '+' }
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-16 p-6 lg:p-8">
            {/* Hero Section — two columns on desktop */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    style={{
                        background: `linear-gradient(135deg, ${colors.primary}cc, ${colors.secondary}aa, ${colors.accent}99)`,
                        backdropFilter: 'blur(12px)',
                        border: `1px solid ${colors.primary}33`,
                        color: colors.background
                    }}
                    className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                >
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Text column */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-4xl lg:text-6xl font-bold mb-4"
                            >
                                {t('home.greeting')} <br />
                                <span className="text-white">Jordan Talahua</span>
                            </motion.h1>

                            <div className="h-8 mb-6">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={currentRole}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-xl lg:text-2xl font-medium"
                                    >
                                        {roles[currentRole]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-lg lg:text-xl mb-8 opacity-90 max-w-xl"
                            >
                                {t('home.description')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/works"
                                    style={{ backgroundColor: colors.background, color: colors.foreground }}
                                    className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
                                >
                                    {t('home.viewProjects')}
                                </Link>
                                <Link
                                    href="/contact"
                                    style={{ borderColor: colors.background, color: colors.background }}
                                    className="border-2 px-6 py-3 rounded-xl font-semibold transition-colors"
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${colors.background}1A`)}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                >
                                    {t('home.contactMe')}
                                </Link>
                            </motion.div>
                        </div>

                        {/* 3D Globe column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="hidden lg:block"
                            style={{ height: 340 }}
                        >
                            <HeroGlobe />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Tecnologías — bolas 3D */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-8"
            >
                <h2 className="text-2xl font-bold text-center">
                    {t('home.technologies.title')}
                </h2>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center gap-2">
                            <div className="w-28 h-28">
                                <BallCanvas icon={tech.icon} />
                            </div>
                            <span className="text-sm opacity-70">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
