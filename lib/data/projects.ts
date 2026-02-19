import swagger from '@/public/Swagger.png'
import agile from '@/public/agileStrat.png'
import byteBazar from '@/public/byte-bazar.png'
import github from '@/public/github.jpg'
import lasVpn from '@/public/laslesvpn.png'
import luxury from '@/public/luxury.png'

export const screenshotsUrls = [
  {
    image: byteBazar,
    name: 'E-Commerce ByteBazar',
    url: 'https://e-commerce-byte-bazar.vercel.app/',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/byte-bazar',
    description:
      'E-Commerce in progress. Techs used are Turbo Repo, NextJS, TS, Tailwind, Prisma, Supabase(Postgres), JWT, Cloudinary, Docker. Deployment: Vercel ',
  },
  {
    image: github,
    name: 'Auth App',
    url: 'https://e-commerce-ukca.onrender.com',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-app',
    description:
      'Micro Front end for authentication. Techs used are React, Vite, Zod, React Hook Form, Tailwind, Docker. Deployment: Render (STATIC SITE)',
  },
  {
    image: github,
    name: 'Auth Service',
    url: 'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-service',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-service',
    description:
      'Micro service developed in NestJs for authentication, techs used are NestJS, TS, Redis, Supabase, JWT, Docker. Deployment: Render ',
  },
  {
    image: github,
    name: 'ClimApp',
    url: 'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    github:
      'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    description: 'Weather app, developed in Expo, ReactNative, WeatherApi',
  },
  /* {
    image: github,
    name: 'TodoApp',
    url: 'https://github.com/EmanuelFuneS/todo-Api',
    github: "",
    description: 'Todo app, developed in flutter',
    }, */
  {
    image: lasVpn,
    name: 'LaslesVpn',
    url: 'https://lasles-vpn-xi.vercel.app/',
    github: '',
    description: 'Techs user ReactJS, NextJS, TS, Tailwind. Deployment: Vercel',
  },
  {
    image: luxury,
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
    github: '',
    description:
      'A simple hotel booking website with a modern design. Techs used are Next.js, React, Tailwind CSS and TypeScript. Deployment: Vercel',
  },
  {
    image: swagger,
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
    github: '',
    description:
      'API documentation for a simple todo application. Techs used are Python, FastAPI, PyTest, MongoDB. Deployment: Railway',
  },
  {
    image: agile,
    name: 'AgileStrat',
    url: 'https://agilestrat-frontend.vercel.app/',
    github: '',
    description: 'Techs are used Vite, React, TS, css. Deployment: Vercel',
  },
]
