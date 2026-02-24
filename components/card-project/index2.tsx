'use client'

import { useState } from 'react'

import { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'

interface CardProjectProps {
  url: string
  name: string
  github: string
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
    <Card
      isFooterBlurred
      className='w-full h-full m-4 overflow-hidden border-none'
      radius='lg'
      shadow='md'
    >
      <Image
        alt='Project screenshot'
        classNames={{
          wrapper: 'w-full h-full',
          img: 'object-cover w-full h-full',
        }}
        src={image.src}
      />

      <CardFooter
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col justify-start dark:bg-[#2A2A2A] before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all duration-700 ease-out ${
          isHovered && description?.length
            ? 'h-32' // Altura expandida
            : 'h-14' // Altura contraída (solo botón)
        }`}
      >
        <div className='flex space-x-6 '>
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
        </div>
        {isHovered && description && (
          <div className='px-1 py-2 text-ellipsis'>
            <div className='font-bold text-small'>{name}</div>
            <div className='text-tiny'>{description}</div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default CardProject
