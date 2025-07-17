import React from 'react'
import Typography from '../ui/typography';
import TimeLine from '../ui/timeline';
import { Card, CardHeader, CardBody } from '@heroui/card';

interface CardExperienceProps {
    rol: string;
    timeLine: string;
    description: string;
}

const CardExperience = ({ rol, timeLine, description }: CardExperienceProps) => {
    return (
        <Card>
            <CardHeader className='flex justify-between'>
                <Typography as="h2" variant='headline'>{rol}</Typography>
                <TimeLine timeline={timeLine} />
            </CardHeader>
            <CardBody>
                <Typography as='p' variant='paragraph'>{description}</Typography>
            </CardBody>
        </Card>
    )
}

export default CardExperience