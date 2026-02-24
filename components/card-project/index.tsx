'use client'

import { useState } from 'react'

import { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Button } from '@heroui/button'
import { Image } from '@heroui/image'

interface CardProjectProps {
  url: string
  name: string
  github: string | null
  description?: string
  image: StaticImageData
}

const CardProject = ({
  url,
  name,
  description,
  image,
  github,
}: CardProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='flex flex-col justify-between w-full h-full border lg:flex-row rounded-xl shadow-medium border-white/0'>
      <div className='w-full lg:w-[650px] xl:w-[800px]'>
        <Image
          alt='Project screenshot'
          className='w-full rounded-xl md:rounded-r-none'
          src={image.src}
        />
      </div>
      <div className='flex flex-col items-start w-full h-full px-2 py-4 space-y-2 text-start text-ellipsis'>
        <div className='font-bold text-small'>{name}</div>
        <div className='text-tiny'>{description}</div>
      </div>
      <div className='flex flex-col items-center h-full p-4 space-y-6'>
        {url && (
          <Button
            className='w-full text-tiny bg-[#2A2A2A]/40 backdrop-blur-sm hover:scale-105'
            color='default'
            radius='lg'
            size='sm'
            variant='faded'
          >
            <Link
              href={url}
              className='text-[#ededed] font-semibold drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]'
            >
              Deploy
            </Link>
          </Button>
        )}
        {github && (
          <Button
            className='w-full text-tiny bg-[#2A2A2A]/40 backdrop-blur-sm hover:scale-105'
            color='default'
            radius='lg'
            size='sm'
            variant='faded'
          >
            <Link
              href={github}
              className='text-[#ededed] font-semibold drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]'
            >
              Repository
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default CardProject
