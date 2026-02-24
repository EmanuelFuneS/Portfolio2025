import swagger from '@/public/Swagger.png'
import agile from '@/public/agileStrat.png'
import authApp from '@/public/auth-app.png'
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
      'Full-stack e-commerce platform currently in active development, built with a monorepo architecture using Turborepo for efficient multi-package management. Features include product listings, cart management, and secure authentication via JWT. The stack includes Next.js (App Router), TypeScript, and Tailwind CSS on the frontend, with Prisma as the ORM connected to a PostgreSQL database hosted on Supabase. Media assets are handled through Cloudinary, and the entire environment is containerized with Docker for consistent development and deployment. Deployed on Vercel.',
  },
  {
    image: authApp,
    name: 'Auth App',
    url: 'https://e-commerce-byte-bazar.vercel.app/auth/login/',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-app',
    description:
      'Standalone micro-frontend focused entirely on the authentication flow, designed to integrate seamlessly into larger micro-frontend architectures. Built with React and Vite for fast bundling, it implements strict client-side form validation using Zod and React Hook Form, ensuring a smooth and reliable user experience. Styled with Tailwind CSS and containerized with Docker. Deployed as a static site on Render. Used in Byte-Bazar, connected with Auth-Service',
  },
  {
    image: github,
    name: 'Auth Service',
    url: 'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-service',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-service',
    description:
      'Dedicated authentication microservice built with NestJS and TypeScript, designed to be consumed by decoupled frontend applications. Handles user registration, login, and token management via JWT. Leverages Redis for session caching and token blacklisting, and Supabase (PostgreSQL) as the primary database. The service is fully containerized with Docker, making it portable and easy to scale. Deployed on Render. Used in Auth-App with ByteBazar',
  },
  /* {
    image: github,
    name: 'ClimApp',
    url: 'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    github:
      'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    description:
      'Cross-platform mobile weather application built with React Native and Expo, targeting both iOS and Android from a single codebase. Consumes the WeatherAPI to display real-time weather conditions, forecasts, and location-based data. Focuses on a clean, intuitive UI optimized for mobile interactions.',
  }, */
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
    github: null,
    description:
      'Pixel-perfect responsive landing page for a fictional VPN service, built as a frontend challenge to demonstrate UI precision and component structure. Developed with Next.js, React, TypeScript, and Tailwind CSS, following a provided Figma design closely. Emphasizes clean layout, reusable components, and responsive design across all screen sizes. Deployed on Vercel.',
  },
  {
    image: luxury,
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
    github: 'https://github.com/EmanuelFuneS/Simple-design-hotel-web',
    description:
      'Modern and elegant hotel booking website showcasing a minimalist design approach. Built with Next.js, React, TypeScript, and Tailwind CSS, the site features room browsing, a clean booking UI, and smooth navigation. Focuses on visual hierarchy and user experience, serving as a demonstration of contemporary web design principles in the hospitality sector. Deployed on Vercel.',
  },
  {
    image: swagger,
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
    github: 'https://github.com/EmanuelFuneS/todo-Api',
    description:
      'RESTful API for a todo application built with Python and FastAPI, featuring automatic interactive documentation via Swagger UI. Implements full CRUD operations with MongoDB as the NoSQL database. Includes a comprehensive test suite written with PyTest to ensure endpoint reliability and data integrity. Containerization-ready and deployed on Railway.',
  },
  {
    image: agile,
    name: 'AgileStrat',
    url: 'https://agilestrat-frontend.vercel.app/',
    github: null,
    description:
      'Web application designed to support agile project management workflows, built with React, TypeScript, and Vite for a fast and responsive experience. Features a clean UI crafted with custom CSS, providing teams with tools to organize and visualize their strategies effectively. Deployed on Vercel.',
  },
]
