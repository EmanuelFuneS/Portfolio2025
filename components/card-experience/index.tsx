import React from 'react'

import { Card, CardBody, CardHeader } from '@heroui/card'

import TimeLine from '../ui/timeline'
import Typography from '../ui/typography'

interface CardExperienceProps {
  rol: string
  timeLine: string
  description: string
}

const CardExperience = ({
  rol,
  timeLine,
  description,
}: CardExperienceProps) => {
  return (
    <Card className='bg-[#E5E7EB] dark:bg-[#222222] p-4'>
      <CardHeader className='flex justify-between'>
        <Typography as='h2' variant='headline'>
          {rol}
        </Typography>
        <TimeLine timeline={timeLine} />
      </CardHeader>
      <CardBody>
        <Typography as='p' variant='paragraph'>
          {description}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default CardExperience
