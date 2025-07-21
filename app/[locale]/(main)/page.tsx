'use client'
import React from 'react'
import CustomButton from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import UserImage from '@/components/user-image'
//import { use } from 'react'
import { useI18n } from '../../i18n/context'
//import { Button } from '@heroui/button'
import TechsSlice from '@/components/techs-slice'


const Page = () => {

    //const { locale } = use(params);
    const { dict } = useI18n();
    /* 
    extended dictionaries
    */

    return (
        <div className="flex flex-col items-center justify-center gap-10 px-10 m-10 h-11/12 " style={{ minHeight: 'calc(100vh - 250px)' }}>
            <UserImage />
            <Typography as="h1" variant='headline'>{dict.about.title}</Typography>
            <Typography as="p" variant='paragraph'>{dict.about.aboutMe}</Typography>

            <div className='flex flex-wrap gap-4'>
                <CustomButton>{dict.about.downloadCv}</CustomButton>
                <CustomButton>{dict.about.contactMe}</CustomButton>
            </div>
            <Typography as='h3' variant='subline'>
                {dict.about.experienceWith}
            </Typography>
            <TechsSlice />
        </div>
    )
}

export default Page