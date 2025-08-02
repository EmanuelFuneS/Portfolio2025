import Link from 'next/link'

import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'

interface CardProjectProps {
  url: string
  name: string
}

const CardProject = ({ url, name }: CardProjectProps) => {
  const imageUrl = `https://image.thum.io/get/width/1200/crop/800/${url}`
  return (
    <Card
      isFooterBlurred
      className='border-none m-4 w-[280px]'
      radius='lg'
      shadow='md'
    >
      <Image
        alt='Project screenshot'
        className='object-fill'
        height={230}
        src={imageUrl}
      />
      <CardFooter className='justify-between dark:bg-[#2A2A2A] before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
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
            CLICK TO VISIT {name}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardProject
