'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Palette } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'

export default function Home() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    const skills = [
        {
            category: t("home.skills.frontend"),
            icon: Globe,
            color: colors.primary,
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: t("home.skills.backend"),
            icon: Server,
            color: colors.secondary,
            techs: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
        },
        {
            category: t("home.skills.mobile"),
            icon: Smartphone,
            color: colors.accent,
            techs: ["React Native", "Flutter", "iOS", "Android"]
        },
        {
            category: t("home.skills.design"),
            icon: Palette,
            color: colors.muted,
            techs: ["Figma", "Adobe XD", "UI/UX", "Prototyping"]
        }
    ]

    return (
        <div className="max-w-6xl mx-auto p-6 lg:p-8 rounded-3xl" style={{ backgroundColor: colors.background, color: colors.foreground }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div style={{ 
                    background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
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
                            className="text-4xl lg:text-6xl font-bold mb-6"
                        >
                            {t("home.greeting")} <br />
                            <span style={{ color: colors.accent }}>Jordan Talahua</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl lg:text-2xl mb-8 opacity-90"
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
                                className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
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

            {/* About Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-16"
            >
                <div style={{ backgroundColor: colors.muted }} className="rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">
                        {t("home.aboutMe")}
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        {t("home.aboutDescription")}
                    </p>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">
                    {t("home.mySkills")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                            style={{ backgroundColor: colors.muted }}
                            className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div style={{ backgroundColor: skill.color }} className="p-3 rounded-xl text-white">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold">
                                    {skill.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skill.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{ backgroundColor: colors.background, color: colors.foreground }}
                                        className="px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
} 