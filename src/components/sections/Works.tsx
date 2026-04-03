'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import { FaExternalLinkAlt, FaGooglePlay, FaGlobe, FaCode } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'

function TiltProjectCard({ children, className, style, onClick }: {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}) {
    const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt: 6, scale: 1.03 })
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

export default function Works() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [selectedProject, setSelectedProject] = useState<string | null>(null)

    const projects = [
        {
            id: 'ecuaroad',
            icon: '🚗',
            color: '#0ea5e9',
            gradient: 'from-sky-500 to-blue-600',
            image: '/projects/ecuaroad.jpg',
            links: [
                {
                    type: 'web',
                    url: 'https://equasoft.ec',
                    label: 'Equasoft'
                }
            ]
        },
        {
            id: 'chefhostschool',
            icon: '👨‍🍳',
            color: '#16a34a',
            gradient: 'from-green-500 to-emerald-600',
            image: '/projects/chefhostschool.jpg',
            links: [
                {
                    type: 'web',
                    url: 'https://chefhostschool.com/sign-in',
                    label: 'Ver Sitio'
                }
            ]
        },
        {
            id: 'pool',
            icon: '🎓',
            color: '#ec4899',
            gradient: 'from-pink-500 to-purple-600',
            image: '/projects/pool.jpg',
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.poolcommunity.PoolApp&hl=es_EC',
                    label: 'Google Play'
                }
            ]
        },
        {
            id: 'ammeno',
            icon: '🏢',
            color: '#8b5cf6',
            gradient: 'from-purple-500 to-indigo-600',
            image: '/projects/ammeno.jpg',
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.seneca.ammeno_app',
                    label: 'Google Play'
                },
                {
                    type: 'web',
                    url: 'https://www.ammeno.app/',
                    label: 'Sitio Web'
                }
            ]
        },
        {
            id: 'gamerfest',
            icon: '🎮',
            color: '#14b8a6',
            gradient: 'from-teal-500 to-cyan-600',
            image: '/projects/gamerfest.jpg',
            links: [
                {
                    type: 'web',
                    url: 'https://espelgamerfest.com/',
                    label: 'Ver Sitio'
                }
            ]
        },
        {
            id: 'maki',
            icon: '💳',
            color: '#f59e0b',
            gradient: 'from-amber-500 to-orange-600',
            image: '/projects/maki.jpg',
            links: [
                {
                    type: 'web',
                    url: 'https://fenixcorp.fenixerp.com/maki-administrador',
                    label: 'Ver Proyecto'
                }
            ]
        }
    ]

    const openModal = (projectId: string) => {
        setSelectedProject(projectId)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <div className="max-w-7xl mx-auto space-y-16 p-6 lg:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('works.title')}</h1>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">
                    {t('works.subtitle')}
                </p>
            </motion.div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    const projectTitle = t(`works.projects.${project.id}.title`)
                    const projectDescription = t(`works.projects.${project.id}.description`)
                    const projectTechnologies = t(`works.projects.${project.id}.technologies`) as unknown as string[]
                    
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <TiltProjectCard
                                style={{ backgroundColor: colors.muted }}
                                className="rounded-3xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                                onClick={() => openModal(project.id)}
                            >
                                {/* Imagen del proyecto */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${project.color}20, ${project.color}10)` }}>
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">
                                        {projectTitle}
                                    </h3>
                                    <p className="text-sm opacity-70 mb-4 line-clamp-2">
                                        {projectDescription}
                                    </p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {Array.isArray(projectTechnologies) && projectTechnologies.slice(0, 4).map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ 
                                                    backgroundColor: `${project.color}20`,
                                                    color: project.color
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {Array.isArray(projectTechnologies) && projectTechnologies.length > 4 && (
                                            <span className="px-3 py-1 rounded-full text-xs font-medium opacity-50">
                                                +{projectTechnologies.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        {project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm hover:opacity-80 transition-opacity"
                                                style={{ 
                                                    backgroundColor: `${project.color}20`,
                                                    color: project.color
                                                }}
                                            >
                                                {link.type === 'playstore' ? <FaGooglePlay /> : <FaGlobe />}
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </TiltProjectCard>
                        </motion.div>
                    )
                })}
            </div>

            {/* Modal de detalles */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{ backgroundColor: colors.background }}
                        className="max-w-3xl w-full rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
                    >
                        {(() => {
                            const project = projects.find(p => p.id === selectedProject)!
                            const projectTitle = t(`works.projects.${selectedProject}.title`)
                            const projectDescription = t(`works.projects.${selectedProject}.description`)
                            const projectFeatures = t(`works.projects.${selectedProject}.features`) as unknown as string[]
                            const projectTechnologies = t(`works.projects.${selectedProject}.technologies`) as unknown as string[]
                            
                            return (
                                <>
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-4xl">{project.icon}</span>
                                                <h2 className="text-3xl font-bold">{projectTitle}</h2>
                                            </div>
                                            <p className="opacity-70">{projectDescription}</p>
                                        </div>
                                        <button 
                                            onClick={closeModal}
                                            className="text-3xl hover:opacity-70 transition-opacity"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                            <FaCode style={{ color: project.color }} />
                                            {t('works.mainFeatures')}
                                        </h3>
                                        <ul className="space-y-2">
                                            {Array.isArray(projectFeatures) && projectFeatures.map((feature: string, idx: number) => (
                                                <li key={idx} className="flex gap-2 text-sm opacity-80">
                                                    <span style={{ color: project.color }}>▸</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tecnologías completas */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-3">{t('works.technologies')}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(projectTechnologies) && projectTechnologies.map((tech: string) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 rounded-full text-sm font-medium"
                                                    style={{ 
                                                        backgroundColor: `${project.color}20`,
                                                        color: project.color
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 flex-wrap">
                                        {project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:opacity-80 transition-opacity"
                                                style={{ 
                                                    backgroundColor: project.color,
                                                    color: 'white'
                                                }}
                                            >
                                                {link.type === 'playstore' ? <FaGooglePlay /> : <FaGlobe />}
                                                {link.label}
                                                <FaExternalLinkAlt size={12} />
                                            </a>
                                        ))}
                                    </div>
                                </>
                            )
                        })()}
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}
