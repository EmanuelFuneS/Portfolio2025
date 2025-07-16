'use client'
import React from 'react'
import Button from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import UserImage from '@/components/user-image'

const Page = ({ params: { locale } }: { params: { locale: string } }) => {

    //const dict = await getDictionary(locale)

    return (
        <div className="h-11/12 flex flex-col justify-center items-center gap-10">
            <UserImage />
            <Typography as="h1" variant='headline'>I do code and
                make content about it!</Typography>
            <Typography as="p" variant='paragraph'>I am a seasoned full-stack software engineer with over
                8 years of professional experience, specializing in backend development.
                My expertise lies in crafting robust and scalable SaaS-based
                architectures on the Amazon AWS platform.</Typography>

            <Button text='Download CV' />
            <p>slice techs</p>
        </div>
    )
}

export default Page