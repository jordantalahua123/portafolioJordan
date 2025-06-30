'use client'

import { useRouter, usePathname } from 'next/navigation'

export function useNavigation() {
    const router = useRouter()
    const pathname = usePathname()
    
    const getActiveSection = () => {
        if (pathname === '/') return 'home'
        return pathname.slice(1) // removes the leading slash
    }

    const navigateTo = (section: string) => {
        if (section === 'home') {
            router.push('/')
        } else {
            router.push(`/${section}`)
        }
    }

    return { activeSection: getActiveSection(), navigateTo }
} 