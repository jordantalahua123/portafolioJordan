'use client'

import { Phone, MapPin, Mail, Calendar, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'
import { useTheme } from 'next-themes'
import { theme } from '@/lib/theme'

export default function Sidebar() {
    const { t } = useLanguage()
    const { theme: currentTheme } = useTheme()
    const colors = theme[currentTheme === 'dark' ? 'dark' : 'light']

    const personalInfo = {
        name: "Jordan Talahua",
        title: t("sidebar.jobTitle"),
        phone: "+593 969183227",
        location: t("sidebar.personalInfo.location"),
        email: "jordantalahua@gmail.com",
        birthday: t("sidebar.personalInfo.birthday"),
        avatar: "/avatar.jpg" // Placeholder por ahora
    }

    const socialLinks = [
        { icon: Github, href: "https://github.com/jordantalahua123", color: colors.foreground },
        { icon: Linkedin, href: "https://www.linkedin.com/in/jordan-talahua-ba2b28208/", color: colors.primary },
        { icon: Twitter, href: "https://twitter.com/jordantalahua", color: colors.accent },
        { icon: Instagram, href: "https://instagram.com/talahua.jordan", color: colors.secondary },
    ]

    return (
        <div className="h-full flex flex-col p-6" style={{ backgroundColor: colors.background, color: colors.foreground }}>
            {/* Foto de perfil */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative w-32 h-32 mb-4">
                    <div style={{ background: `linear-gradient(to bottom right, ${colors.primary}, ${colors.secondary})` }}
                        className="w-full h-full rounded-2xl flex items-center justify-center">
                        {/* Placeholder por ahora - aquí iría tu foto */}
                        <span className="text-4xl font-bold text-white">JT</span>
                    </div>
                </div>

                <h1 className="text-xl font-bold text-center">
                    {personalInfo.name}
                </h1>
                <p className="text-sm opacity-70 text-center mt-1">
                    {personalInfo.title}
                </p>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: colors.muted }}
                        className="p-2 rounded-lg transition-colors hover:opacity-80"
                    >
                        <social.icon size={18} style={{ color: social.color }} />
                    </a>
                ))}
            </div>

            {/* Información de contacto */}
            <div className="space-y-4 flex-1">
                <div style={{ backgroundColor: colors.muted }} className="flex items-center gap-3 p-3 rounded-lg">
                    <div style={{ backgroundColor: colors.primary }} className="p-2 rounded-lg">
                        <Phone size={16} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs opacity-70">{t("sidebar.phone")}</p>
                        <p className="text-sm font-medium">{personalInfo.phone}</p>
                    </div>
                </div>

                <div style={{ backgroundColor: colors.muted }} className="flex items-center gap-3 p-3 rounded-lg">
                    <div style={{ backgroundColor: colors.secondary }} className="p-2 rounded-lg">
                        <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs opacity-70">{t("sidebar.location")}</p>
                        <p className="text-sm font-medium">{personalInfo.location}</p>
                    </div>
                </div>

                <div style={{ backgroundColor: colors.muted }} className="flex items-center gap-3 p-3 rounded-lg">
                    <div style={{ backgroundColor: colors.accent }} className="p-2 rounded-lg">
                        <Mail size={16} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs opacity-70">{t("sidebar.email")}</p>
                        <p className="text-sm font-medium">{personalInfo.email}</p>
                    </div>
                </div>

                <div style={{ backgroundColor: colors.muted }} className="flex items-center gap-3 p-3 rounded-lg">
                    <div style={{ backgroundColor: colors.primary }} className="p-2 rounded-lg">
                        <Calendar size={16} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs opacity-70">{t("sidebar.birthday")}</p>
                        <p className="text-sm font-medium">{personalInfo.birthday}</p>
                    </div>
                </div>
            </div>

            {/* Botón de descarga CV */}
            <button style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                className="w-full mt-6 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download size={18} />
                {t("sidebar.downloadCV")}
            </button>
        </div>
    )
} 