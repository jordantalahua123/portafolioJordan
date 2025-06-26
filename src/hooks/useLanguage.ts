'use client'

import { useState, useEffect } from 'react'
import esTranslations from '@/lib/translations/es.json'
import enTranslations from '@/lib/translations/en.json'

type Language = 'es' | 'en'
type Translations = typeof esTranslations

const translations: Record<Language, Translations> = {
    es: esTranslations,
    en: enTranslations
}

// Función helper para obtener valores anidados
function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split('.')
    let current = obj
    
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key] as Record<string, unknown>
        } else {
            return path // Si no encuentra la clave, devuelve la clave misma
        }
    }
    
    return typeof current === 'string' ? current : path
}

export function useLanguage() {
    const [language, setLanguage] = useState<Language>('es')

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang && ['es', 'en'].includes(savedLang)) {
            setLanguage(savedLang)
        }
    }, [])

    const toggleLanguage = (newLang: Language) => {
        setLanguage(newLang)
        localStorage.setItem('language', newLang)
    }

    const t = (key: string): string => {
        return getNestedValue(translations[language] as Record<string, unknown>, key)
    }

    return { language, toggleLanguage, t }
} 