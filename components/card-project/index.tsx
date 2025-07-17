
import Link from 'next/link'
import React from 'react'
import Typography from '../ui/typography';
import { Button } from '@heroui/button';
import { Card, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';


interface CardProjectProps {
    url?: string;
    name?: string;

}

const CardProject = ({ url, name }: CardProjectProps) => {
    return (
        <Card isFooterBlurred className="border-none m-4 w-[200px]" radius="lg" shadow='md'>
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://heroui.com/images/hero-card.jpeg"
                width={200}
            />
            <CardFooter className="justify-between dark:bg-[#2A2A2A] before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">

                <Button
                    className="w-full text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                >
                    CLICK TO VISIT
                </Button>
            </CardFooter>
        </Card>

    )
}

export default CardProject