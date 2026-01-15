import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const navigationItems = [
    { id: 'home', labelKey: 'navigation.home', icon: 'Home' },
    { id: 'experience', labelKey: 'navigation.experience', icon: 'Briefcase' },
    { id: 'education', labelKey: 'navigation.education', icon: 'GraduationCap' },
    { id: 'skills', labelKey: 'navigation.skills', icon: 'Zap' },
    { id: 'works', labelKey: 'navigation.works', icon: 'FileText' },
    { id: 'blogs', labelKey: 'navigation.blogs', icon: 'BookOpen' },
    { id: 'contact', labelKey: 'navigation.contact', icon: 'Mail' },
] 