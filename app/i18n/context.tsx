
'use client'

import { createContext, useContext, ReactNode } from 'react'

type Dictionary = {
    navigation: {
        about: string;
        experiences: string;
        projects: string;
        techs: string;
        contact: string;
    }
    about: {
        title: string;
        aboutMe: string;
        downloadCv: string;
        contactMe: string
        experienceWith: string;
    }
    experiences: {
        title: string;
        experienceOne: {
            title: string;
            timeline: string;
            description: string;
        },
        experienceTwo: {
            title: string;
            timeline: string;
            description: string;
        },
        experienceTree: {
            title: string;
            timeline: string;
            description: string;
        }
    }
    contact: {
        title: string;
        subtitle: string;
        fullName: string;
        email: string;
        message: string;
        send: string;
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