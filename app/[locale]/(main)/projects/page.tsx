'use client'

import CardProject from '@/components/card-project'
import swagger from '@/public/Swagger.png'
import agile from '@/public/agileStrat.png'
import github from '@/public/github.jpg'
import lasVpn from '@/public/laslesvpn.png'
import luxury from '@/public/luxury.png'

const screenshotsUrls = [
  {
    image: luxury,
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
    description:
      'A simple hotel booking website with a modern design. Techs used are Next.js, React, Tailwind CSS and TypeScript.',
  },
  {
    image: swagger,
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
    description:
      'API documentation for a simple todo application. Techs used are Python, FastAPI, PyTest, MongoDB.',
  },
  {
    image: github,
    name: 'E-Commerce ByteBazar',
    url: 'https://github.com/EmanuelFuneS/e-commerce',
    description:
      'E-Commerce in progress. Techs used are Turbo Repo, NextJS, TS, Tailwind, Prisma, Postgres, Auth0, Cloudinary ',
  },
  {
    image: github,
    name: 'ClimApp',
    url: 'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    description: 'Weather app, developed in Expo, ReactNative, weatherApi',
  },
  /* {
    image: github,
    name: 'TodoApp',
    url: 'https://github.com/EmanuelFuneS/flutterApp',
    description: 'Todo app, developed in flutter',
  }, */
  {
    image: lasVpn,
    name: 'LaslesVpn',
    url: 'https://github.com/EmanuelFuneS/flutterApp',
  },
  {
    image: agile,
    name: 'AgileStrat',
    url: 'https://agilestrat-frontend.vercel.app/',
    description: 'Techs are used Vite, React, TS, css',
  },
]
const Page = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-auto px-10 m-10 '>
      {screenshotsUrls.map((project, index: number) => (
        <CardProject
          key={index}
          image={project.image}
          url={project.url}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default Page
