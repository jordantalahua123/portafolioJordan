'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Palette } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
    const { t } = useLanguage()

    const skills = [
        {
            category: t("home.skills.frontend"),
            icon: Globe,
            color: "bg-blue-500",
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: t("home.skills.backend"),
            icon: Server,
            color: "bg-green-500",
            techs: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
        },
        {
            category: t("home.skills.mobile"),
            icon: Smartphone,
            color: "bg-purple-500",
            techs: ["React Native", "Flutter", "iOS", "Android"]
        },
        {
            category: t("home.skills.design"),
            icon: Palette,
            color: "bg-pink-500",
            techs: ["Figma", "Adobe XD", "UI/UX", "Prototyping"]
        }
    ]

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
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
                            <span className="text-yellow-300">Jordan Talahua</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl lg:text-2xl mb-8 text-white/90"
                        >
                            {t("home.description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                                {t("home.viewProjects")}
                            </button>
                            <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        {t("home.aboutMe")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {t("home.mySkills")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-xl ${skill.color} text-white`}>
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {skill.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skill.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
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