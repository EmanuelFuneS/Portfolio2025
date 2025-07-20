'use client'
import React from 'react'
import CustomButton from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import UserImage from '@/components/user-image'
import { use } from 'react'
import { useI18n } from '../../i18n/context'
import { Button } from '@heroui/button'
import TechsSlice from '@/components/techs-slice'


const Page = ({ params }: { params: Promise<{ locale: string }> }) => {

    const { locale } = use(params);
    const { dict } = useI18n();
    /*
    fix theme fore and background
    fix i18n implement

    finish languageSwitched
    
    extended dictionaries

    finish about route
    advance with experience route
    start with techs route

    */

    return (
        <div className="flex flex-col items-center justify-center gap-10 px-10 m-10 h-11/12 " style={{ minHeight: 'calc(100vh - 250px)' }}>
            <UserImage />
            <Typography as="h1" variant='headline'>I do code and
                make content about it!</Typography>
            <Typography as="p" variant='paragraph'>I am a seasoned full-stack software engineer with over
                8 years of professional experience, specializing in backend development.
                My expertise lies in crafting robust and scalable SaaS-based
                architectures on the Amazon AWS platform.</Typography>

            <div className='flex flex-wrap gap-4'>
                <CustomButton>Download Cv</CustomButton>
                <CustomButton>GITHUB</CustomButton>
            </div>
            <Typography as='h3' variant='subline'>
                Experience With
            </Typography>
            <TechsSlice />
        </div>
    )
}

export default Page