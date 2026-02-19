'use client'

import Link from 'next/link'

import { Card, CardBody, CardHeader } from '@heroui/card'

import TechsSlice from '@/components/techs-slice'
import Typography from '@/components/ui/typography'

import CardProject from '../../../components/card-project'
import { screenshotsUrls } from '../../../lib/data/projects'
import useGithubActivity, {
  Activity,
} from '../../../lib/hooks/useGithubActivity'
import { useI18n } from '../../i18n/context'

const Page = () => {
  const { dict } = useI18n()
  const { activity, isLoading } = useGithubActivity()

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
          <CardHeader>
            <Typography as='h1' variant='headline'>
              {dict.about.title}
            </Typography>
          </CardHeader>
          <CardBody>
            <Typography as='p' variant='subline'>
              {dict.about.aboutMe}
            </Typography>
          </CardBody>
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
          <CardHeader className='flex justify-center'>
            <Typography as='h3' variant='subline'>
              {dict.about.experienceWith}
            </Typography>
          </CardHeader>
          <CardBody>
            <TechsSlice />
          </CardBody>
        </Card>

        {/* Item 3 - Resume */}
        <Card
          className='
    w-full 
    lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2
    md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-2
    bg-[var(--item-c3)] text-[var(--text-title)] 
    flex flex-row md:flex-col items-center justify-center font-bold 
    rounded-lg gap-4 p-5
  '
        >
          <Card className='flex items-center justify-center w-1/2 px-2'>
            Frontend
          </Card>
          <Card className='flex items-center justify-center w-1/2 px-2'>
            Backend
          </Card>
          <Card className='flex items-center justify-center w-1/2 px-2'>
            FullStack
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
    rounded-lg  gap-4 p-6 font-bold
  '
        >
          <Card className='w-full h-full hover:scale-105'>
            <CardBody className='flex items-center justify-center'>
              {dict.about.downloadCv}
            </CardBody>
          </Card>

          <Card className='w-full h-full hover:scale-105'>
            <CardBody className='flex items-center justify-center'>
              <Link
                href={
                  'https://mail.google.com/mail/?view=cm&to=ignacio.emanuel.funes@gmail.com&su=Asunto&body=Hola'
                }
              >
                {dict.about.contactMe}
              </Link>
            </CardBody>
          </Card>

          <Card className='w-full h-full hover:scale-105'>
            <CardBody className='flex items-center justify-center'>
              <Link href={''}>Linkedin</Link>
            </CardBody>
          </Card>

          <Card className='w-full h-full hover:scale-105'>
            <CardBody className='flex items-center justify-center'>
              <Link href={''}>GitHub</Link>
            </CardBody>
          </Card>
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
          <CardHeader>
            <Typography as='h3' variant='subline'>
              Last Activity
            </Typography>
          </CardHeader>
          <CardBody>
            {activity.length &&
              !isLoading &&
              activity.map((e: Activity, idx: number) => (
                <div
                  key={idx}
                  className='flex justify-between hover:text-slate-500'
                >
                  <Typography as={'legend'} variant='paragraph'>
                    {e.repo}
                  </Typography>
                  <Typography as={'legend'} variant='paragraph'>
                    {e.date}
                  </Typography>
                  <Link href={e.url}>Link</Link>
                </div>
              ))}
          </CardBody>
        </Card>
      </div>

      <section className='flex flex-col items-start justify-center w-full space-x-2 space-y-6 md:flex-row md:m-10'>
        <div className='flex items-start'>
          <Typography as='h1' variant='headline'>
            {dict.experiences.title}
          </Typography>
        </div>
        <div className='flex-col justify-around hidden h-screen md:visible md:flex border-l-1'>
          <span className='relative w-3 h-3 rounded-full right-1.5 bg-slate-400'></span>
          <span className='relative w-3 h-3 rounded-full right-1.5 bg-slate-400'></span>
          <span className='relative w-3 h-3 rounded-full right-1.5 bg-slate-400'></span>
        </div>
        <div className='flex flex-col justify-around h-screen'>
          <Card className='p-4'>
            <CardHeader className='flex justify-between w-full'>
              <Typography as='h1' variant='headline'>
                {dict.experiences.experienceOne.title}
              </Typography>
              <Typography as='label' variant='subline'>
                {dict.experiences.experienceOne.timeline}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography as='p' variant='paragraph'>
                {dict.experiences.experienceOne.description}
              </Typography>
            </CardBody>
          </Card>
          <Card className='p-4'>
            <CardHeader className='flex justify-between w-full'>
              <Typography as='h1' variant='headline'>
                {dict.experiences.experienceTwo.title}
              </Typography>
              <Typography as='label' variant='subline'>
                {dict.experiences.experienceTwo.timeline}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography as='p' variant='paragraph'>
                {dict.experiences.experienceTwo.description}
              </Typography>
            </CardBody>
          </Card>
          <Card className='p-4'>
            <CardHeader className='flex justify-between w-full'>
              <Typography as='h1' variant='headline'>
                {dict.experiences.experienceThree.title}
              </Typography>
              <Typography as='label' variant='subline'>
                {dict.experiences.experienceThree.timeline}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography as='p' variant='paragraph'>
                {dict.experiences.experienceThree.description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
      <section className='space-y-6 '>
        <Typography as='h1' variant='headline'>
          {dict.projects.title}
        </Typography>
        {screenshotsUrls.map((project, index: number) => (
          <CardProject
            key={index}
            image={project.image}
            url={project.url}
            github={project.github}
            name={project.name}
            description={project.description}
          />
        ))}
      </section>
    </div>
  )
}

export default Page
