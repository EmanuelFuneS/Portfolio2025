'use client'

import CardProject from '@/components/card-project'

const screenshotsUrls = [
  {
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
    description:
      'A simple hotel booking website with a modern design. Techs used are Next.js, React, Tailwind CSS and TypeScript.',
  },
  {
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
    description:
      'API documentation for a simple todo application. Techs used are Python, FastAPI, PyTest, MongoDB.',
  },
]
const Page = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-auto px-10 m-10 '>
      {screenshotsUrls.map((project, index: number) => (
        <CardProject
          key={index}
          url={project.url}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default Page
