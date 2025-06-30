'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { 
    FaReact, FaVuejs, FaNodeJs, FaDocker, FaGithub, FaLinkedin,
    FaDatabase, FaCloud 
} from 'react-icons/fa'
import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, 
    SiMongodb, SiPostgresql, SiJenkins 
} from 'react-icons/si'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'

export default function Home() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [currentRole, setCurrentRole] = useState(0)
    const roles = [t('home.roles.role1'), t('home.roles.role2'), t('home.roles.role3')]

    // Animación para las métricas
    const [isVisible, setIsVisible] = useState(false)
    const numberAnimation = useSpring({
        number: isVisible ? 3 : 0,
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
        { number: 3, label: t('home.metrics.experience'), suffix: '+' },
        { number: 10, label: t('home.metrics.projects'), suffix: '+' },
        { number: 6, label: t('home.metrics.certifications'), suffix: '' },
        { number: 8, label: t('home.metrics.technologies'), suffix: '+' }
    ]

    const technologies = {
        frontend: [
            { icon: FaReact, name: 'React' },
            { icon: SiNextdotjs, name: 'Next.js' },
            { icon: FaVuejs, name: 'Vue.js' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiTailwindcss, name: 'Tailwind' }
        ],
        backend: [
            { icon: FaNodeJs, name: 'Node.js' },
            { icon: SiExpress, name: 'Express' }
        ],
        databases: [
            { icon: SiMongodb, name: 'MongoDB' },
            { icon: SiPostgresql, name: 'PostgreSQL' },
            { icon: FaDatabase, name: 'MySQL' }
        ],
        devops: [
            { icon: FaDocker, name: 'Docker' },
            { icon: FaCloud, name: 'Azure' },
            { icon: SiJenkins, name: 'Jenkins' }
        ]
    }

    return (
        <div className="max-w-6xl mx-auto space-y-16 p-6 lg:p-8">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
                    color: colors.background 
                }} className="rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    {/* Elementos decorativos */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                    <div className="relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-4xl lg:text-6xl font-bold mb-4"
                        >
                            {t("home.greeting")} <br />
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
                            className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl"
                        >
                            {t("home.description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button style={{ backgroundColor: colors.background, color: colors.foreground }} 
                                className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                                {t("home.viewProjects")}
                            </button>
                            <button style={{ borderColor: colors.background, color: colors.background }} 
                                className="border-2 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                                {t("home.contactMe")}
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Métricas */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {metrics.map((metric) => (
                    <div
                        key={metric.label}
                        style={{ backgroundColor: colors.muted }}
                        className="rounded-2xl p-6 text-center"
                    >
                        <animated.h3 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: colors.primary }}>
                            {numberAnimation.number.to(n => Math.floor(n * (metric.number / 3)) + metric.suffix)}
                        </animated.h3>
                        <p className="text-sm opacity-80">{metric.label}</p>
                    </div>
                ))}
            </motion.div>

            {/* Tecnologías */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-8"
            >
                <h2 className="text-2xl font-bold text-center mb-8">{t("home.technologies.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(technologies).map(([category, techs], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                            style={{ backgroundColor: colors.muted }}
                            className="rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-semibold mb-4">{t(`home.technologies.${category}`)}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center text-center"
                                    >
                                        <tech.icon
                                            size={24}
                                            className="mb-2"
                                            style={{ color: colors.primary }}
                                        />
                                        <span className="text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Enlaces Sociales */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex justify-center gap-6"
            >
                <a
                    href="https://github.com/jordantalahua123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors.muted }}
                >
                    <FaGithub size={24} style={{ color: colors.primary }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/jordan-talahua-ba2b28208/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors.muted }}
                >
                    <FaLinkedin size={24} style={{ color: colors.primary }} />
                </a>
            </motion.div>
        </div>
    )
} 