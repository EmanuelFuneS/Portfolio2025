import React from 'react'
import Link from 'next/link'
import Typography from '../ui/typography'


type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className='w-full h-20 bg-[#222222]'>
            <div className='flex items-center justify-around h-full px-4 mx-auto max-w-7xl'>
                <div>Logo</div>
                <div className='flex justify-between w-1/2 lg:w-1/4'>
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
            </div>
        </nav>
    )
}


const MobileNavBar = (props: Props) => {
    return (<div>
        asd
    </div>
    )
}

export default NavBar