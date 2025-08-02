'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'

interface CardProjectProps {
  url: string
  name: string
  description?: string
}

const CardProject = ({ url, name, description }: CardProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const imageUrl = `https://image.thum.io/get/width/1200/crop/800/${url}`
  return (
    <Card isFooterBlurred className='m-4 border-none' radius='lg' shadow='md'>
      <Image
        alt='Project screenshot'
        className='object-fill md:w-[280px] md:h-[230px]'
        src={imageUrl}
      />

      <CardFooter
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col justify-start dark:bg-[#2A2A2A] before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all duration-700 ease-out ${
          isHovered
            ? 'h-32' // Altura expandida
            : 'h-14' // Altura contraída (solo botón)
        }`}
      >
        <Button
          className='w-full text-tiny bg-[#2A2A2A]/40 backdrop-blur-sm'
          color='default'
          radius='lg'
          size='sm'
          variant='flat'
        >
          <Link
            href={url}
            className='text-[#ededed] font-semibold drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]'
          >
            CLICK TO VISIT
          </Link>
        </Button>
        {isHovered && (
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
