'use client'

import { Phone, MapPin, Mail, Calendar, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

export default function Sidebar() {
    const { t } = useLanguage()

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
        { icon: Github, href: "https://github.com/jordantalahua123", color: "hover:text-gray-900 dark:hover:text-white" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/jordan-talahua-ba2b28208/", color: "hover:text-blue-600" },
        { icon: Twitter, href: "https://twitter.com/jordantalahua", color: "hover:text-blue-400" },
        { icon: Instagram, href: "https://instagram.com/talahua.jordan", color: "hover:text-pink-500" },
    ]

    return (
        <div className="h-full flex flex-col p-6">
            {/* Foto de perfil */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative w-32 h-32 mb-4">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
                        {/* Placeholder por ahora - aquí iría tu foto */}
                        <span className="text-4xl font-bold text-white">JT</span>
                    </div>
                </div>

                <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {personalInfo.name}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
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
                        className={cn(
                            "p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors",
                            social.color
                        )}
                    >
                        <social.icon size={18} />
                    </a>
                ))}
            </div>

            {/* Información de contacto */}
            <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
                        <Phone size={16} className="text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t("sidebar.phone")}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.phone}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t("sidebar.location")}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <Mail size={16} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t("sidebar.email")}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.email}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t("sidebar.birthday")}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{personalInfo.birthday}</p>
                    </div>
                </div>
            </div>

            {/* Botón de descarga CV */}
            <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download size={18} />
                {t("sidebar.downloadCV")}
            </button>
        </div>
    )
} 