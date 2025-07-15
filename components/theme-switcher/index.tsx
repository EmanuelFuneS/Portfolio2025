import { useTheme } from 'next-themes'
import React from 'react'

type Props = {}

const ThemeSwitcher = (props: Props) => {
    const { setTheme } = useTheme()
    return (
        <div>ThemeSwitcher</div>
    )
}

export default ThemeSwitcher