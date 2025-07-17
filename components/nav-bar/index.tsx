'use client'
import React from 'react'
import Link from 'next/link'
import Typography from '../ui/typography'
import ThemeSwitcher from '../theme-switcher'
import Image from 'next/image'
import Signature from '../../public/signatureLogo.svg'
import LanguageSwitched from '../language-switched'


const NavBar = () => {
    return (
        <nav className='w-full h-20 bg-[#E5E7EB] dark:bg-[#222222]'>
            <div className='flex items-center justify-around h-full px-4 mx-auto max-w-7xl'>
                <div>
                    <Image
                        src={Signature}
                        alt='Emanuel Funes'
                    />
                </div>
                <div className='flex justify-between w-1/2 lg:w-1/3'>
                    <Link href={'/'}>
                        <Typography as='span' variant='nav-link'>About</Typography>
                    </Link>
                    <Link href={'/projects'}>
                        <Typography as='span' variant='nav-link'>Projects</Typography>
                    </Link>
                    <Link href={'/experience'}>
                        <Typography as='span' variant='nav-link'>Experiences</Typography>
                    </Link>
                    <Link href={'techs'}>
                        <Typography as='span' variant='nav-link'>Techs</Typography>
                    </Link>
                    <Link href={'/contact'}>
                        <Typography as='span' variant='nav-link' >Contact</Typography>
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <ThemeSwitcher />
                    <LanguageSwitched />
                </div>
            </div>
        </nav>
    )
}


const MobileNavBar = () => {
    return (<div>
        asd
    </div>
    )
}

export default NavBar