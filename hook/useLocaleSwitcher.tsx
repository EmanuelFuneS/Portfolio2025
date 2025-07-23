'use client'

import { usePathname, useRouter } from 'next/navigation'

import { defaultLocale, locales } from '../app/i18n'

export function useLocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentLocale = () => {
    const segments = pathname.split('/')
    const currentLocale = segments[1]
    return locales.includes(currentLocale as any)
      ? currentLocale
      : defaultLocale
  }

  const switchLocale = (newLocale: string) => {
    if (!locales.includes(newLocale as any)) return

    const currentLocale = getCurrentLocale()
    if (currentLocale === newLocale) return

    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`

    window.location.href = newPath
  }

  const getStoredLocale = () => {
    if (typeof document === 'undefined') return null
    const cookies = document.cookie.split(';')
    const localeCookie = cookies.find(cookie =>
      cookie.trim().startsWith('NEXT_LOCALE')
    )

    return localeCookie ? localeCookie.split('=')[1] : null
  }

  return {
    currentLocale: getCurrentLocale(),
    switchLocale,
    getStoredLocale,
    locales,
  }
}
