import React, { ReactNode } from 'react'
import { Button } from '@heroui/button';

interface ButtonProp {
    icon?: any;
    children: ReactNode;
}

const CustomButton = ({ icon, children }: ButtonProp) => {
    return (

        <Button
            //className="bg-[#F5F5F4] dark:bg-[#161513]"
            color='default'
            radius='lg'
            size='lg'
            variant='flat'
        >
            {children}
        </Button>

    )
}

export default CustomButton