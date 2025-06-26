import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Talahua - Full Stack Developer",
  description: "Portafolio profesional de Jordan Talahua, desarrollador full stack especializado en React, Next.js y tecnologías modernas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="h-screen flex overflow-hidden">
            {/* Sidebar - Fijo en altura completa, responsive en ancho */}
            <aside className="hidden lg:flex lg:flex-col w-[15%] min-w-[300px] max-w-[400px] bg-white dark:bg-gray-800 shadow-lg">
              <Sidebar />
            </aside>
            
            {/* Área derecha - Navbar + Contenido */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Navbar - Fijo en la parte superior */}
              <header className="flex-shrink-0 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
              <Navbar />
              </header>
              
              {/* Contenido principal - Con scroll independiente */}
              <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
