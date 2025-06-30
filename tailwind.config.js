/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                primaryDark: '#818cf8',
                secondary: '#ec4899',
                secondaryDark: '#f472b6',
                accent: '#818cf8',
                accentDark: '#a78bfa',
                background: '#ffffff',
                backgroundDark: '#111827',
                foreground: '#171717',
                foregroundDark: '#f9fafb',
                muted: '#f3f4f6',
                mutedDark: '#374151',
            },
        },
    },
    plugins: [],
} 