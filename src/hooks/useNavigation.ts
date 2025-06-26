'use client'

import { useState } from 'react'

export function useNavigation() {
    const [activeSection, setActiveSection] = useState('home')

    const navigateTo = (section: string) => {
        setActiveSection(section)
    }

    return { activeSection, navigateTo }
} 