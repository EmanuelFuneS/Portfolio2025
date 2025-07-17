import React, { useState } from 'react'

const LanguageSwitched = () => {
    const [lang, setLang] = useState<string>('en')


    const handleSelect = (e: any) => {
        const langSelected = e.value;
        if (langSelected === 'en') {
            setLang('es')
        } else {
            setLang('en')
        }
    }


    return (
        <div>
            <select
                className='bg-gray-300 text-[#121212]'
                name="language" id="lang" onChange={handleSelect}>
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select>
        </div>
    )
}

export default LanguageSwitched