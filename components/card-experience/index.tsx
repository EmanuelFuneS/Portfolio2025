import React from 'react'
import Typography from '../ui/typography';
import TimeLine from '../ui/timeline';

interface CardExperienceProps {
    rol: string;
    timeLine: string;
    description: string;
}

const CardExperience = ({ rol, timeLine, description }: CardExperienceProps) => {
    return (
        <div>
            <div>
                <Typography as="h2" variant='headline'>{rol}</Typography>
                <TimeLine timeline={timeLine} />
            </div>
            <div>
                <Typography as='p' variant='paragraph'>{description}</Typography>
            </div>
        </div>
    )
}

export default CardExperience