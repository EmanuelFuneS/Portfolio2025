import Link from 'next/link'

import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'
import { Tooltip } from '@heroui/tooltip'

interface CardProjectProps {
  url: string
  name: string
  description?: string
}

const CardProject = ({ url, name, description }: CardProjectProps) => {
  const imageUrl = `https://image.thum.io/get/width/1200/crop/800/${url}`
  return (
    <Tooltip
      content={
        <div className='px-1 py-2 max-w-[1400px] text-ellipsis'>
          <div className='font-bold text-small'>{name}</div>
          <div className='text-tiny '>{description}</div>
        </div>
      }
      placement='top'
      showArrow
      classNames={{
        base: [''],
        content: [
          'bg-[#E5E7EB] dark:bg-[#222222]',
          'py-2 px-4 shadow-xl',
          'text-[#161513] dark:text-[#ededed]',
        ],
      }}
    >
      <Card isFooterBlurred className='m-4 border-none' radius='lg' shadow='md'>
        <Image
          alt='Project screenshot'
          className='object-fill md:w-[280px] md:h-[230px]'
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
              CLICK TO VISIT
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Tooltip>
  )
}

export default CardProject
