'use client'

import { Select, SelectItem } from '@heroui/select'
import { ES, US } from 'country-flag-icons/react/3x2'

import { useLocaleSwitcher } from '../../hook/useLocaleSwitcher'
import Typography from '../ui/typography'

const LanguageSwitched = () => {
  const { currentLocale, switchLocale, locales } = useLocaleSwitcher()

  const changeLanguage = () => {
    const currentIndex = locales.indexOf(currentLocale as 'es' | 'en')
    const nextIndex = (currentIndex + 1) % locales.length
    const nextLocale = locales[nextIndex]

    switchLocale(nextLocale)
  }

  return (
    <div className='w-20'>
      <Select
        defaultSelectedKeys={[currentLocale]}
        startContent={
          currentLocale === 'en' ? (
            <US className='w-10' />
          ) : (
            <ES className='w-10' />
          )
        }
        color='default'
        name='language'
        id='lang'
        onChange={changeLanguage}
      >
        <SelectItem key={'en'}>
          <div className='flex items-center justify-between w-full'>
            <US className='w-4 h-4' />
            <Typography as='span' variant='paragraph'>
              EN
            </Typography>
          </div>
        </SelectItem>
        <SelectItem key={'es'}>
          <div className='flex items-center justify-between w-full'>
            <ES className='w-4 h-4' />
            <Typography as='span' variant='paragraph'>
              ES
            </Typography>
          </div>
        </SelectItem>
      </Select>
    </div>
  )
}

export default LanguageSwitched
