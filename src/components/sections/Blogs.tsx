'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import { useState } from 'react'
import { FaCode, FaMobileAlt, FaDatabase, FaRocket, FaServer, FaClock, FaTag } from 'react-icons/fa'
import { useTilt } from '@/hooks/useTilt'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const categoryIcons: Record<string, any> = {
    backend: FaServer,
    mobile: FaMobileAlt,
    data: FaDatabase,
    devops: FaRocket,
    startup: FaCode,
}

const categoryColors: Record<string, string> = {
    backend: '#3b82f6',
    mobile: '#ec4899',
    data: '#8b5cf6',
    devops: '#f59e0b',
    startup: '#10b981',
}

const postKeys = ['microservices', 'ecuaroad', 'powerbi', 'flutter', 'devops'] as const

function BlogCard({ postKey, colors }: { postKey: string, colors: typeof theme['light'] }) {
    const { t } = useLanguage()
    const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt: 5, scale: 1.02 })

    const title = t(`blogs.posts.${postKey}.title`)
    const category = t(`blogs.posts.${postKey}.category`)
    const date = t(`blogs.posts.${postKey}.date`)
    const readTime = t(`blogs.posts.${postKey}.readTime`)
    const description = t(`blogs.posts.${postKey}.description`)
    const tags = t(`blogs.posts.${postKey}.tags`) as unknown as string[]
    const readMore = t('blogs.readMore')
    const minRead = t('blogs.minRead')

    const Icon = categoryIcons[category] ?? FaCode
    const color = categoryColors[category] ?? colors.primary

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            className="h-full"
        >
            <motion.div
                style={{ backgroundColor: `${colors.muted}cc`, backdropFilter: 'blur(12px)', borderTop: `3px solid ${color}` }}
                className="rounded-2xl p-6 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
                {/* Decorative glow */}
                <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: color }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                        <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${color}20` }}
                        >
                            <Icon size={18} style={{ color }} />
                        </div>
                        <div className="flex items-center gap-1 text-xs opacity-60">
                            <FaClock size={10} />
                            <span>{readTime} {minRead}</span>
                        </div>
                    </div>

                    {/* Category + Date */}
                    <div className="flex items-center gap-2 mb-3">
                        <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold capitalize"
                            style={{ backgroundColor: `${color}20`, color }}
                        >
                            {category}
                        </span>
                        <span className="text-xs opacity-50">{date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 leading-snug group-hover:opacity-90 transition-opacity">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm opacity-70 leading-relaxed mb-4 flex-1 line-clamp-4">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {Array.isArray(tags) && tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs opacity-70"
                                style={{ backgroundColor: colors.background }}
                            >
                                <FaTag size={8} />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Read more */}
                    <button
                        className="mt-auto text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                        style={{ color }}
                    >
                        {readMore} →
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default function Blogs() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']
    const [activeCategory, setActiveCategory] = useState('all')

    const categoryKeys = ['all', 'backend', 'mobile', 'data', 'devops', 'startup']

    const filteredPosts = postKeys.filter((key) => {
        if (activeCategory === 'all') return true
        const category = t(`blogs.posts.${key}.category`)
        return category === activeCategory
    })

    return (
        <div className="max-w-6xl mx-auto space-y-12 p-6 lg:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('blogs.title')}</h1>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">{t('blogs.subtitle')}</p>
            </motion.div>

            {/* Category filter */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3"
            >
                {categoryKeys.map((cat) => {
                    const isActive = activeCategory === cat
                    const color = cat === 'all' ? colors.primary : (categoryColors[cat] ?? colors.primary)
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                            style={{
                                backgroundColor: isActive ? color : `${color}20`,
                                color: isActive ? '#fff' : color,
                                transform: isActive ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            {t(`blogs.categories.${cat}`)}
                        </button>
                    )
                })}
            </motion.div>

            {/* Posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((key, index) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        className="h-full"
                    >
                        <BlogCard postKey={key} colors={colors} />
                    </motion.div>
                ))}
            </div>

            {/* Coming soon banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                    background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                    borderColor: `${colors.primary}30`
                }}
                className="rounded-2xl p-8 text-center border"
            >
                <p className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                    ✍️ Más artículos en camino
                </p>
                <p className="opacity-60 text-sm">
                    Suscríbete en LinkedIn para no perderte los próximos posts sobre arquitecturas de software, datos y desarrollo móvil.
                </p>
                <a
                    href="https://www.linkedin.com/in/jordan-talahua-ba2b28208/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: colors.primary }}
                >
                    Seguir en LinkedIn
                </a>
            </motion.div>
        </div>
    )
}
