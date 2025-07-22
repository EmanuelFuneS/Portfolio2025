'use client'
import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@heroui/button';

interface CustomButtonProp extends ButtonProps {
    children: ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProp) => {
    return (
        <Button
            className="bg-[#E5E7EB] dark:bg-[#222222]"
            radius='lg'
            size='lg'
            variant='flat'
            {...props}
        >
            {children}
        </Button>

    )
}

export default CustomButton