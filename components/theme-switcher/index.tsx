import { useTheme } from 'next-themes'
import React from 'react'

const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme()

    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div>
            <button className={`flex ${theme === 'dark' ? 'justify-start' : 'justify-end'} w-10 bg-gray-300 rounded-4xl p-1`} onClick={handleTheme}>
                <div className='bg-white rounded-full w-3 h-3'></div>
            </button>
        </div>
    )
}

export default ThemeSwitcher