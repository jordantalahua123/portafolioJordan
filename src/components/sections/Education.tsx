'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

export default function Education() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    const education = [
        {
            title: t('education.university.title'),
            institution: t('education.university.institution'),
            period: t('education.university.period'),
            type: "academic"
        }
    ]

    const certificates = [
        {
            title: t('education.certificates.python.title'),
            description: t('education.certificates.python.description'),
            date: t('education.certificates.python.date')
        },
        {
            title: t('education.certificates.odoo.title'),
            description: t('education.certificates.odoo.description'),
            date: t('education.certificates.odoo.date')
        },
        {
            title: t('education.certificates.fullstack.title'),
            description: t('education.certificates.fullstack.description'),
            date: t('education.certificates.fullstack.date')
        },
        {
            title: t('education.certificates.mobile.title'),
            description: t('education.certificates.mobile.description'),
            date: t('education.certificates.mobile.date')
        }
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-16 p-6 lg:p-8">
            {/* Educación Formal */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <FaGraduationCap size={24} style={{ color: colors.primary }} />
                    <h2 className="text-2xl font-bold">{t('education.formal')}</h2>
                </div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            style={{ backgroundColor: colors.muted }}
                            className="rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                            <p className="text-lg opacity-80 mb-2">{edu.institution}</p>
                            <p className="text-sm opacity-60">{edu.period}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Certificados */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <FaCertificate size={24} style={{ color: colors.secondary }} />
                    <h2 className="text-2xl font-bold">{t('education.certifications')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            style={{ backgroundColor: colors.muted }}
                            className="rounded-2xl p-6 relative group hover:shadow-lg transition-shadow"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-bold flex-1">{cert.title}</h3>
                                    <span className="text-sm opacity-60">{cert.date}</span>
                                </div>
                                <p className="text-sm opacity-80 line-clamp-4 group-hover:line-clamp-none transition-all">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
} 