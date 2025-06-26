'use client'

import { useNavigation } from '@/hooks/useNavigation'
import { useLanguage } from '@/hooks/useLanguage'
import Home from '@/components/sections/Home'

export default function Page() {
  const { activeSection } = useNavigation()
  const { t } = useLanguage()

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'resume':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("placeholders.resumeSection")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("placeholders.comingSoon")}
            </p>
          </div>
        )
      case 'works':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("placeholders.worksSection")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("placeholders.comingSoon")}
            </p>
          </div>
        )
      case 'blogs':
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
      case 'contact':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("placeholders.contactSection")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("placeholders.comingSoon")}
            </p>
          </div>
        )
      default:
        return <Home />
    }
  }

  return <>{renderSection()}</>
}
