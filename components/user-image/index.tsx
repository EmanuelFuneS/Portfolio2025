import Image from 'next/image'
import React from 'react'
import userImage from '../../public/user.png'
import userImageCustom from "../../public/userCustom.png"
import { useTheme } from 'next-themes'

type Props = {}

const UserImage = (props: Props) => {
    const { theme } = useTheme()
    return (
        <div className=''>
            <Image
                src={theme === 'dark' ? userImageCustom : userImage}
                alt='Emanuel Funes'
                className='rounded-full object-cover aspect-auto w-[280px] h-[280px]'
                priority
            />
        </div>
    )
}

export default UserImage