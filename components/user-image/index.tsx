
import Image from 'next/image'
import React from 'react'
import userImage from '../../public/user.png'
import userImageCustom from "../../public/userCustom.png"
import { useTheme } from 'next-themes'

const UserImage = () => {
    const { theme } = useTheme()
    return (
        <div className=''>
            <Image
                src={theme === 'light' ? userImageCustom : userImage}
                alt='Emanuel Funes'
                className={`rounded-full object-cover aspect-auto w-[280px] h-[280px] ${theme === 'dark' ? 'scale-x-[-1]' : ''} transition-transform duration-300`}
                priority
            />
        </div>
    )
}

export default UserImage