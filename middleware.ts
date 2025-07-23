import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { locales, defaultLocale } from './app/i18n'

function getLocale(request: NextRequest): string {
    const localeCookie = request.cookies.get('NEXT_LOCALE')
    if (localeCookie && locales.includes(localeCookie.value as any)) {
        return localeCookie.value
    }
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
        const preferredLocale = acceptLanguage
            .split(',')[0]
            .split('-')[0]

        if (locales.includes(preferredLocale as any)) {
            return preferredLocale
        }
    }
    return defaultLocale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const response = NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        )

        response.cookies.set('NEXT_LOCALE', locale, {
            maxAge: 365 * 24 * 60 * 60, // 1 año
            httpOnly: false,
            sameSite: 'lax',
            path: '/'
        })

        return response
    }

    const currentLocale = pathname.split('/')[1]
    if (locales.includes(currentLocale as any)) {
        const response = NextResponse.next()
        
        response.cookies.set('NEXT_LOCALE', currentLocale, {
            maxAge: 365 * 24 * 60 * 60,
            httpOnly: false,
            sameSite: 'lax',
            path: '/'
        })

        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}