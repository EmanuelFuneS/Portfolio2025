import React from 'react'

import Typography from '../typography'

interface TimeLineProps {
  timeline: string
}

const TimeLine = ({ timeline }: TimeLineProps) => {
  return (
    <div>
      <Typography as='span' variant='paragraph'>
        {timeline}{' '}
      </Typography>
    </div>
  )
}

export default TimeLine
