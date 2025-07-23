import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import Image from 'next/image'

import userImage from '../../public/user.png'
import userImageCustom from '../../public/userCustom.png'

const UserImage = () => {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const imageClasses = isClient
    ? 'rounded-full object-cover aspect-auto w-[280px] h-[280px] scale-x-[-1] transition-transform...'
    : 'rounded-full object-cover aspect-auto w-[280px] h-[280px]'

  return (
    <div className=''>
      <Image
        src={theme === 'light' ? userImageCustom : userImage}
        alt='Emanuel Funes'
        width={280}
        height={280}
        className={imageClasses}
        priority
      />
    </div>
  )
}

export default UserImage
