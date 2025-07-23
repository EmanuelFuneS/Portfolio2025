'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Select, SelectItem } from '@heroui/select'
import { ES, US } from 'country-flag-icons/react/3x2'

import { useLocaleSwitcher } from '../../hook/useLocaleSwitcher'
import Typography from '../ui/typography'

const LanguageSwitched = () => {
  const router = useRouter()
  const pathname = usePathname()

  const { currentLocale, switchLocale, locales } = useLocaleSwitcher()

  const changeLanguage = (newLocale: string) => {
    /* const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath) */

    // Alternar entre idiomas
    const currentIndex = locales.indexOf(currentLocale as 'es' | 'en')
    const nextIndex = (currentIndex + 1) % locales.length
    const nextLocale = locales[nextIndex]

    // Esto forzará una recarga del servidor
    switchLocale(nextLocale)
    console.log(currentLocale)
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
        onChange={e => changeLanguage(e.target.value)}
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
