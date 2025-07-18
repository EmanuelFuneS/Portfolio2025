'use client'
import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@heroui/button';

interface CustomButtonProp extends Omit<ButtonProps, 'size' | 'variant'> {
    icon?: any;
    children: ReactNode;
}

const CustomButton = ({ icon, children }: CustomButtonProp) => {
    return (
        <Button
            className="bg-[#E5E7EB] dark:bg-[#222222]"

            radius='lg'
            size='lg'
            variant='flat'
        >
            {children}
        </Button>

    )
}

export default CustomButton