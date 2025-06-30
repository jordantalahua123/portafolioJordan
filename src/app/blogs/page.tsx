'use client'

import { useLanguage } from '@/lib/context/LanguageContext'

export default function BlogsPage() {
    const { t } = useLanguage()

    return (
        <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t("placeholders.blogsSection")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
                {t("placeholders.comingSoon")}
            </p>
        </div>
    )
} 