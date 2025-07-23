import type { Metadata } from 'next'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Exo_2, Geist_Mono } from 'next/font/google'

import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'

import NavBar from '@/components/nav-bar'

import '../globals.css'
import { getDictionary, locales } from '../i18n'
import { I18nProvider } from '../i18n/context'

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-exo2',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio Emanuel Funes',
  description: 'Create with Next 15, React, Heroui, Tailwindcss',
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${exo2.variable} ${geistMono.variable} antialiased`}>
        <HeroUIProvider>
          <NextThemesProvider attribute='class' defaultTheme='dark'>
            <I18nProvider dict={dict} locale={locale}>
              <ToastProvider />
              <NavBar />
              <main className=' max-w-7xl mx-auto px-4 py-8 dark:bg-[#161513] text-foreground bg-background'>
                {children}
              </main>
            </I18nProvider>
          </NextThemesProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
