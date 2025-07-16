import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { locales, defaultLocale } from './app/i18n'

function getLocale(request: NextRequest): string {
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
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}