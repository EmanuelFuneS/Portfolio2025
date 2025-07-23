'use client'

import Link from 'next/link'

import TechsSlice from '@/components/techs-slice'
import CustomButton from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import UserImage from '@/components/user-image'
import { downloadCvFromApi } from '@/lib/cv-download'

import { useI18n } from '../../i18n/context'

const Page = () => {
  const { dict } = useI18n()

  return (
    <div
      className='flex flex-col items-center justify-center gap-10 md:px-10 md:m-10 h-11/12 '
      style={{ minHeight: 'calc(100vh - 250px)' }}
    >
      <UserImage />
      <Typography as='h1' variant='headline'>
        {dict.about.title}
      </Typography>
      <Typography as='p' variant='paragraph'>
        {dict.about.aboutMe}
      </Typography>

      <div className='flex flex-wrap gap-4'>
        <CustomButton onClick={downloadCvFromApi}>
          {dict.about.downloadCv}
        </CustomButton>
        <CustomButton>
          <Link href={'/contact'}>{dict.about.contactMe}</Link>
        </CustomButton>
      </div>
      <Typography as='h3' variant='subline'>
        {dict.about.experienceWith}
      </Typography>
      <TechsSlice />
    </div>
  )
}

export default Page
