'use client';
import React, { useEffect, useState } from 'react'
import { Select, SelectItem } from '@heroui/select'
import { useI18n } from '@/app/i18n/context'
import { locales } from '@/app/i18n'
import { useRouter, usePathname } from 'next/navigation'
const LanguageSwitched = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { locale } = useI18n();

    const changeLanguage = (newLocale: string) => {

        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')
        router.push(newPath)
    }

    console.log(locale)
    return (
        <div className='w-20'>
            <Select defaultSelectedKeys={locale}
                color='default'
                name="language" id="lang" onChange={(e) => changeLanguage(e.target.value)}>
                <SelectItem key={'en'}>EN</SelectItem>
                <SelectItem key={'es'}>ES</SelectItem>
            </Select >
        </div >
    )
}

export default LanguageSwitched