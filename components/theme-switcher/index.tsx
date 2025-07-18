'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@heroui/switch'
import { MoonIcon, SunIcon } from '@/utils/icons'

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
        <Switch
            defaultSelected
            color="default"
            endContent={<MoonIcon />}
            size="lg"
            startContent={<SunIcon />}
            onValueChange={handleTheme}
        />
    )
}

export default ThemeSwitcher