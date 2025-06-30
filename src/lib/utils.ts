import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const navigationItems = [
    { id: 'home', labelKey: 'navigation.home', icon: 'Home' },
    { id: 'education', labelKey: 'navigation.education', icon: 'GraduationCap' },
    { id: 'resume', labelKey: 'navigation.resume', icon: 'FileText' },
    { id: 'works', labelKey: 'navigation.works', icon: 'Briefcase' },
    { id: 'blogs', labelKey: 'navigation.blogs', icon: 'BookOpen' },
    { id: 'contact', labelKey: 'navigation.contact', icon: 'Mail' },
] 