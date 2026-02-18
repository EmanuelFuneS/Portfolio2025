'use client'

import Link from 'next/link'

import { Card } from '@heroui/card'

import TechsSlice from '@/components/techs-slice'
import Typography from '@/components/ui/typography'

import CardExperience from '../../../components/card-experience'
import CardProject from '../../../components/card-project'
import { useI18n } from '../../i18n/context'
import { screenshotsUrls } from './projects/page'

const Page = () => {
  const { dict } = useI18n()

  return (
    <div
      className='flex flex-col items-center justify-center space-y-48 lg:px-10 lg:m-10 h-11/12 '
      style={{ minHeight: 'calc(100vh - 250px)' }}
    >
      <div
        className='
  flex flex-col gap-2.5
  md:grid md:grid-cols-3 md:grid-rows-5 
  lg:grid lg:grid-cols-5 lg:grid-rows-3 
  bg-[var(--app-bg)] rounded-2xl min-h-[700px]
'
      >
        {/* Item 1 - About Me */}
        <Card
          className='
    w-full
    lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2
    md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2
    bg-[var(--item-c1)] text-[var(--text-title)] 
    flex flex-col items-center justify-center font-bold 
    rounded-lg p-4
  '
        >
          <Typography as='h1' variant='headline'>
            {dict.about.title}
          </Typography>
          <Typography as='p' variant='paragraph'>
            {dict.about.aboutMe}
          </Typography>
        </Card>

        {/* Item 2 - Techs */}
        <Card
          className='
    w-full
    lg:col-start-3 lg:col-span-3 lg:row-start-1 lg:row-span-1
    md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-1
    bg-[var(--item-c2)] text-[var(--text-title)] 
    flex flex-col items-center justify-center font-bold 
    rounded-lg  p-4
  '
        >
          <Typography as='h3' variant='subline'>
            {dict.about.experienceWith}
          </Typography>
          <TechsSlice />
        </Card>

        {/* Item 3 - Resume */}
        <Card
          className='
    w-full 
    lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2
    md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-2
    bg-[var(--item-c3)] text-[var(--text-title)] 
    flex flex-row lg:flex-col items-center justify-center font-bold 
    rounded-lg gap-4 p-5
  '
        >
          <Card className='flex items-center justify-center w-1/2'>
            FrontEnd
          </Card>
          <Card className='flex items-center justify-center w-1/2'>
            BackEnd
          </Card>
          <Card className='flex items-center justify-center w-1/2'>
            Full Stack
          </Card>
        </Card>

        {/* Item 4 - Links grid */}
        <Card
          className='
    w-full
    lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-2
    md:col-start-2 md:col-span-2 md:row-start-4 md:row-span-2
    grid grid-cols-2 grid-rows-2 
    bg-[var(--item-c4)] text-[var(--text-title)] 
    rounded-lg  gap-2 p-6
  '
        >
          <div className='flex items-center justify-center font-bold'>
            <Card className='flex items-center justify-center w-full h-full'>
              {dict.about.downloadCv}
            </Card>
          </div>
          <div className='flex items-center justify-center font-bold'>
            <Card className='flex items-center justify-center w-full h-full'>
              <Link href={'/contact'}>{dict.about.contactMe}</Link>
            </Card>
          </div>
          <div className='flex items-center justify-center font-bold'>
            <Card className='flex items-center justify-center w-full h-full'>
              Linkedin
            </Card>
          </div>
          <div className='flex items-center justify-center font-bold'>
            <Card className='flex items-center justify-center w-full h-full'>
              Linkedin
            </Card>
          </div>
        </Card>

        {/* Item 5 - Last Project */}
        <Card
          className='
    w-full
    lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-1
    md:col-start-1 md:col-span-3 md:row-start-6 md:row-span-1
    bg-[var(--item-c5)] text-[var(--text-title)] 
    flex items-center justify-center font-bold 
    rounded-lg  p-4 min-h-[100px]
  '
        >
          Last Project
        </Card>
      </div>

      <section
        className='flex flex-col items-center justify-center w-full gap-5 md:px-10 md:m-10'
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
      <section className='space-y-10'>
        {screenshotsUrls.map((project, index: number) => (
          <CardProject
            key={index}
            image={project.image}
            url={project.url}
            name={project.name}
            description={project.description}
          />
        ))}
      </section>
    </div>
  )
}

export default Page
