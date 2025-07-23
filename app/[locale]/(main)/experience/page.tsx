'use client'

import { useI18n } from '@/app/i18n/context'
import CardExperience from '@/components/card-experience'
import Typography from '@/components/ui/typography'

const Page = () => {
  const { dict } = useI18n()
  return (
    <section
      className='flex flex-col items-center justify-center w-auto gap-5 md:px-10 md:m-10'
      style={{ minHeight: 'calc(100vh - 250px)' }}
    >
      <Typography as='h1' variant='headline'>
        {dict.experiences.title}
      </Typography>
      <CardExperience
        rol={dict.experiences.experienceOne.title}
        timeLine={dict.experiences.experienceOne.timeline}
        description={dict.experiences.experienceOne.description}
      />
      <CardExperience
        rol={dict.experiences.experienceTwo.title}
        timeLine={dict.experiences.experienceTwo.timeline}
        description={dict.experiences.experienceTwo.description}
      />
      <CardExperience
        rol={dict.experiences.experienceThree.title}
        timeLine={dict.experiences.experienceThree.timeline}
        description={dict.experiences.experienceThree.description}
      />
    </section>
  )
}

export default Page
