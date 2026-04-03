'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode } from 'react-icons/fa'
import { useState } from 'react'
import { useTilt } from '@/hooks/useTilt'

function TiltCard({ children, className, style, onClick }: {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}) {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt: 5, scale: 1.02 })
    return (
        <div
            ref={ref}
            className={className}
            style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default function Experience() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [expandedJob, setExpandedJob] = useState<string | null>(null)

    const jobs = [
        {
            id: 'ministerio',
            icon: '📊',
            color: '#0369a1'
        },
        {
            id: 'recycob',
            icon: '💳',
            color: '#3b82f6'
        },
        {
            id: 'chefhostschool',
            icon: '👨‍🍳',
            color: '#16a34a'
        },
        {
            id: 'seneca',
            icon: '🏢',
            color: '#8b5cf6'
        },
        {
            id: 'pool',
            icon: '🎓',
            color: '#ec4899'
        },
        {
            id: 'equasoft',
            icon: '🚀',
            color: '#6366f1'
        },
        {
            id: 'kuntursoft',
            icon: '⚙️',
            color: '#f59e0b'
        },
        {
            id: 'epmhv',
            icon: '🏛️',
            color: '#10b981'
        },
        {
            id: 'fenix',
            icon: '🔥',
            color: '#ef4444'
        },
        {
            id: 'espe',
            icon: '🎮',
            color: '#14b8a6'
        }
    ]

    const toggleJob = (jobId: string) => {
        setExpandedJob(expandedJob === jobId ? null : jobId)
    }

    return (
        <div className="max-w-6xl mx-auto space-y-16 p-6 lg:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaBriefcase size={32} style={{ color: colors.primary }} />
                    <h1 className="text-4xl font-bold">{t('experience.title')}</h1>
                </div>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">
                    {t('home.aboutDescription')}
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Línea vertical del timeline */}
                <div 
                    className="absolute left-8 top-0 bottom-0 w-1 hidden md:block"
                    style={{ background: `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})` }}
                />

                {/* Jobs */}
                <div className="space-y-8">
                    {jobs.map((job, index) => {
                        const isExpanded = expandedJob === job.id
                        const jobTitle = t(`experience.jobs.${job.id}.title`)
                        const jobCompany = t(`experience.jobs.${job.id}.company`)
                        const jobLocation = t(`experience.jobs.${job.id}.location`)
                        const jobPeriod = t(`experience.jobs.${job.id}.period`)
                        const jobDescription = t(`experience.jobs.${job.id}.description`)
                        const jobTechnologies = t(`experience.jobs.${job.id}.technologies`) as unknown as string[]
                        const jobResponsibilities = t(`experience.jobs.${job.id}.responsibilities`) as unknown as string[]
                        
                        return (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative"
                            >
                                {/* Punto en el timeline */}
                                <div 
                                    className="absolute left-6 w-5 h-5 rounded-full border-4 hidden md:block z-10"
                                    style={{ 
                                        backgroundColor: job.color,
                                        borderColor: colors.background
                                    }}
                                />

                                {/* Card del trabajo */}
                                <TiltCard
                                    className="md:ml-20 cursor-pointer rounded-2xl"
                                    onClick={() => toggleJob(job.id)}
                                >
                                    <motion.div
                                        style={{ backgroundColor: colors.muted }}
                                        className="rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
                                    >
                                        {/* Decoración de fondo */}
                                        <div 
                                            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30"
                                            style={{ backgroundColor: job.color }}
                                        />

                                        <div className="relative z-10">
                                            {/* Header del card */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div 
                                                    className="text-4xl p-3 rounded-xl"
                                                    style={{ backgroundColor: `${job.color}20` }}
                                                >
                                                    {job.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-1">
                                                        {jobTitle}
                                                    </h3>
                                                    <p className="text-lg font-semibold opacity-90 mb-2" style={{ color: job.color }}>
                                                        {jobCompany}
                                                    </p>
                                                    <div className="flex flex-wrap gap-4 text-sm opacity-70">
                                                        <span className="flex items-center gap-1">
                                                            <FaMapMarkerAlt size={12} />
                                                            {jobLocation}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <FaCalendarAlt size={12} />
                                                            {jobPeriod}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Descripción corta */}
                                            <p className="text-sm opacity-80 mb-4">
                                                {jobDescription}
                                            </p>

                                            {/* Tecnologías */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {Array.isArray(jobTechnologies) && jobTechnologies.map((tech: string) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                                        style={{ 
                                                            backgroundColor: `${job.color}20`,
                                                            color: job.color
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Detalles expandibles */}
                                            <motion.div
                                                initial={false}
                                                animate={{ 
                                                    height: isExpanded ? 'auto' : 0,
                                                    opacity: isExpanded ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-opacity-20" style={{ borderColor: colors.foreground }}>
                                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                        <FaCode style={{ color: job.color }} />
                                                        {t('experience.responsibilities')}
                                                    </h4>
                                                    <ul className="space-y-2 text-sm opacity-80">
                                                        {Array.isArray(jobResponsibilities) && jobResponsibilities.map((resp: string, idx: number) => (
                                                            <li key={idx} className="flex gap-2">
                                                                <span style={{ color: job.color }}>▸</span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>

                                            {/* Botón para expandir/colapsar */}
                                            <button
                                                className="mt-4 text-sm font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
                                                style={{ color: job.color }}
                                            >
                                                {isExpanded ? t('experience.viewLess') : t('experience.viewMore')}
                                            </button>
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Estadísticas */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {[
                    { label: t('experience.stats.companies'), value: '10', icon: '🏢' },
                    { label: t('experience.stats.years'), value: '4+', icon: '📅' },
                    { label: t('experience.stats.projects'), value: '20+', icon: '🚀' },
                    { label: t('experience.stats.technologies'), value: '25+', icon: '💻' }
                ].map((stat, index) => (
                    <div
                        key={stat.label}
                        style={{ backgroundColor: colors.muted }}
                        className="rounded-xl p-6 text-center"
                    >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>
                            {stat.value}
                        </div>
                        <div className="text-sm opacity-70">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
