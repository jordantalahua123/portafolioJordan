import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import MainLayout from '@/components/layout/MainLayout';

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
