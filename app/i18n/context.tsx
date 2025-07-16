
'use client'

import { createContext, useContext, ReactNode } from 'react'

type Dictionary = {
    navigation: {
        about: string
    }
    about: {
    }
}

const I18nContext = createContext<{
    dict: Dictionary
    locale: string
} | undefined>(undefined)

export function I18nProvider({
    children,
    dict,
    locale
}: {
    children: ReactNode
    dict: Dictionary
    locale: string
}) {
    return (
        <I18nContext.Provider value={{ dict, locale }}>
            {children}
        </I18nContext.Provider>
    )
}

export const useI18n = () => {
    const context = useContext(I18nContext)
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider')
    }
    return context
}