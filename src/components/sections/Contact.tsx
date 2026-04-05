'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

export default function Contact() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        const mailtoLink = `mailto:jordantalahua@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
            `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`

        setTimeout(() => {
            window.open(mailtoLink, '_blank')
            setStatus('success')
            setForm({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        }, 600)
    }

    const contactItems = [
        { icon: FaEnvelope, label: t('contact.info.email'), value: 'jordantalahua@gmail.com', href: 'mailto:jordantalahua@gmail.com' },
        { icon: FaPhone, label: t('contact.info.phone'), value: '+593 969 183 227', href: 'tel:+593969183227' },
        { icon: FaMapMarkerAlt, label: t('contact.info.location'), value: 'Quito, Ecuador', href: null },
        { icon: FaClock, label: t('contact.info.availability'), value: t('contact.info.availabilityValue'), href: null },
    ]

    const socialLinks = [
        { icon: FaGithub, label: t('contact.social.github'), href: 'https://github.com/jordantalahua123', color: '#333' },
        { icon: FaLinkedin, label: t('contact.social.linkedin'), href: 'https://www.linkedin.com/in/jordan-talahua-ba2b28208/', color: '#0077b5' },
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-12 p-6 lg:p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('contact.title')}</h1>
                <p className="text-lg opacity-70 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
            </motion.div>

            {/* Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left — Contact info */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h2 className="text-xl font-bold mb-4">{t('contact.info.title')}</h2>
                        <div className="space-y-3">
                            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                                    style={{ backgroundColor: `${colors.muted}cc`, backdropFilter: 'blur(12px)' }}
                                    className="flex items-center gap-4 p-4 rounded-xl"
                                >
                                    <div
                                        className="p-2.5 rounded-lg flex-shrink-0"
                                        style={{ backgroundColor: `${colors.primary}20` }}
                                    >
                                        <Icon size={18} style={{ color: colors.primary }} />
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-50 mb-0.5">{label}</p>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="font-medium hover:opacity-80 transition-opacity"
                                                style={{ color: colors.primary }}
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="font-medium">{value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55, duration: 0.5 }}
                    >
                        <h2 className="text-xl font-bold mb-4">{t('contact.social.title')}</h2>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, label, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-opacity hover:opacity-80"
                                    style={{ backgroundColor: `${colors.muted}cc`, backdropFilter: 'blur(12px)', color: colors.foreground }}
                                >
                                    <Icon size={20} style={{ color }} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ backgroundColor: `${colors.muted}cc`, backdropFilter: 'blur(12px)' }}
                    className="rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold mb-5">{t('contact.form.title')}</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1.5 opacity-80">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                    placeholder={t('contact.form.namePlaceholder')}
                                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2"
                                    style={{
                                        backgroundColor: colors.background,
                                        color: colors.foreground,
                                        border: `1px solid ${colors.primary}30`,
                                    }}
                                    onFocus={e => (e.target.style.borderColor = colors.primary)}
                                    onBlur={e => (e.target.style.borderColor = `${colors.primary}30`)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1.5 opacity-80">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                                    style={{
                                        backgroundColor: colors.background,
                                        color: colors.foreground,
                                        border: `1px solid ${colors.primary}30`,
                                    }}
                                    onFocus={e => (e.target.style.borderColor = colors.primary)}
                                    onBlur={e => (e.target.style.borderColor = `${colors.primary}30`)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1.5 opacity-80">{t('contact.form.subject')}</label>
                            <input
                                type="text"
                                required
                                value={form.subject}
                                onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                                placeholder={t('contact.form.subjectPlaceholder')}
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                                style={{
                                    backgroundColor: colors.background,
                                    color: colors.foreground,
                                    border: `1px solid ${colors.primary}30`,
                                }}
                                onFocus={e => (e.target.style.borderColor = colors.primary)}
                                onBlur={e => (e.target.style.borderColor = `${colors.primary}30`)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1.5 opacity-80">{t('contact.form.message')}</label>
                            <textarea
                                required
                                rows={5}
                                value={form.message}
                                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                placeholder={t('contact.form.messagePlaceholder')}
                                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                                style={{
                                    backgroundColor: colors.background,
                                    color: colors.foreground,
                                    border: `1px solid ${colors.primary}30`,
                                }}
                                onFocus={e => (e.target.style.borderColor = colors.primary)}
                                onBlur={e => (e.target.style.borderColor = `${colors.primary}30`)}
                            />
                        </div>

                        {/* Status message */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                                style={{ backgroundColor: '#10b98120', color: '#10b981' }}
                            >
                                <FaCheck size={14} />
                                {t('contact.form.success')}
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                                style={{ backgroundColor: '#ef444420', color: '#ef4444' }}
                            >
                                <FaExclamationTriangle size={14} />
                                {t('contact.form.error')}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="w-full py-3 rounded-xl font-semibold text-sm transition-opacity disabled:opacity-60"
                            style={{ backgroundColor: colors.primary, color: '#fff' }}
                        >
                            {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
