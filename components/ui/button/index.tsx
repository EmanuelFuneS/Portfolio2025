import React from 'react'
import Image from 'next/image';

interface ButtonProp {
    icon: any;
    text: string;
}

const Button = ({ icon, text }: ButtonProp) => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
                <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                />
                {text}
            </button>
        </div>
    )
}

export default Button