'use client';
import React from 'react'
import { Select, SelectItem } from '@heroui/select'
import { useI18n } from '@/app/i18n/context'
import { useRouter, usePathname } from 'next/navigation'
import { US, ES } from 'country-flag-icons/react/3x2'
import Typography from '../ui/typography';


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

    return (
        <div className='w-20'>
            <Select defaultSelectedKeys={[locale]}
                startContent={locale === "en" ? <US className='w-10' /> : <ES className='w-10' />}
                color='default'
                name="language" id="lang" onChange={(e) => changeLanguage(e.target.value)}>
                <SelectItem key={'en'} >
                    <div className='flex items-center justify-between w-full'>
                        <US className='w-4 h-4' />
                        <Typography as='span' variant='paragraph'>EN</Typography>
                    </div>
                </SelectItem>
                <SelectItem key={'es'}>
                    <div className='flex items-center justify-between w-full'>
                        <ES className='w-4 h-4' />
                        <Typography as='span' variant='paragraph'>ES</Typography>
                    </div>
                </SelectItem>
            </Select >
        </div >
    )
}

export default LanguageSwitched