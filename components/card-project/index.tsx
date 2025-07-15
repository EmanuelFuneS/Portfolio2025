import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typography from '../ui/typography';

interface CardProjectProps {
    url: string;
    name: string;

}

const CardProject = ({ url, name }: CardProjectProps) => {
    return (
        <div className=''>
            {/* <Image src={""} /> */}
            <Link
                href={url}
            >
                Click Here to Visit
                <Typography as='span' variant='sub-link'>{name}</Typography>
            </Link>
        </div>
    )
}

export default CardProject