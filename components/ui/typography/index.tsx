import React, { ReactNode } from 'react'

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'legend';

type TypographyVariant = 'paragraph' | 'headline' | 'subline' | 'nav-link' | 'sub-link'


interface TypographyProps {
    as?: TypographyElement;
    variant: TypographyVariant;
    className?: string;
    children: ReactNode;
}

const Typography = ({ as = 'p', variant = "paragraph", className = '', children, ...props }: TypographyProps) => {

    const Component = as

    const getVariantClasses = () => {
        switch (variant) {
            case 'headline':
                return 'text-3xl font-bold leading-tight text-center';
            case 'subline':
                return 'text-lg font-medium leading-tight text-gray-600 text-center';
            case 'paragraph':
                return 'text-md leading-relaxed text-center';
            case 'nav-link':
                return 'text-lg font-semibold hover:text-gray-300 transition-colors'
            case 'sub-link':
                return 'font-medium font-bold  hover:text-gray-300 transition-colors'
            default:
                return 'text-base';
        }
    }

    return (
        <Component className={`${getVariantClasses()} ${className}`} {...props}>
            {children}
        </Component >
    )
}

export default Typography