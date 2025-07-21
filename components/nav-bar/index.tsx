'use client'
import React from 'react'
import Link from 'next/link'
import Typography from '../ui/typography'
import ThemeSwitcher from '../theme-switcher'
import Image from 'next/image'
import Signature from '../../public/signatureLogo.svg'
import LanguageSwitched from '../language-switched'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, } from '@heroui/dropdown'
import { Button } from '@heroui/button'
import { CiMenuBurger } from "react-icons/ci";
import { useI18n } from '@/app/i18n/context'

const NavBar = () => {
    const { dict } = useI18n()
    return (
        <>
            <nav className='hidden md:block w-full h-20 bg-[#E5E7EB] dark:bg-[#222222]'>
                <div className='flex items-center justify-around h-full px-4 mx-auto max-w-7xl'>
                    <div>
                        <Image
                            src={Signature}
                            alt='Emanuel Funes'
                        />
                    </div>
                    <div className='flex justify-between w-1/2 lg:w-1/3 md:gap-4'>
                        <Link href={'/'}>
                            <Typography as='span' variant='nav-link'>{dict.navigation.about}</Typography>
                        </Link>
                        {/* <Link href={'/projects'}>
                            <Typography as='span' variant='nav-link'>Projects</Typography>
                        </Link> */}
                        <Link href={'/experience'}>
                            <Typography as='span' variant='nav-link'>{dict.navigation.experiences}</Typography>
                        </Link>
                        {/* <Link href={'techs'}>
                            <Typography as='span' variant='nav-link'>Techs</Typography>
                        </Link> */}
                        <Link href={'/contact'}>
                            <Typography as='span' variant='nav-link' >{dict.navigation.contact}</Typography>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-4 '>
                        <ThemeSwitcher />
                        <LanguageSwitched />
                    </div>
                </div>
            </nav>

            <nav className='block md:hidden  w-full h-[85] bg-[#E5E7EB] dark:bg-[#222222]'>
                <div className="flex items-center justify-between p-4">
                    <div><Image
                        src={Signature}
                        width={150}
                        height={100}
                        alt='Emanuel Funes'
                    /></div>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="flat"><CiMenuBurger size={20} /></Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Menu">
                            <DropdownItem key="about"><Link href={'/'}>
                                <Typography as='span' variant='nav-link'>{dict.navigation.about}</Typography>
                            </Link></DropdownItem>
                            {/* <DropdownItem key="projects"><Link href={'/projects'}>
                                <Typography as='span' variant='nav-link'>Projects</Typography>
                            </Link></DropdownItem> */}
                            <DropdownItem key="experiences"><Link href={'/experience'}>
                                <Typography as='span' variant='nav-link'>{dict.navigation.experiences}</Typography>
                            </Link></DropdownItem>
                            {/* <DropdownItem key="techs">
                                <Link href={'techs'}>
                                    <Typography as='span' variant='nav-link'>Techs</Typography>
                                </Link>
                            </DropdownItem> */}
                            <DropdownItem key="contact">
                                <Link href={'/contact'}>
                                    <Typography as='span' variant='nav-link' >{dict.navigation.contact}</Typography>
                                </Link>
                            </DropdownItem>
                            <DropdownItem key={'theme'} className='flex items-center justify-center w-full'>
                                <div className='flex items-center justify-between w-full'>

                                    <ThemeSwitcher />
                                    <LanguageSwitched />
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>
        </>
    )
}

export default NavBar