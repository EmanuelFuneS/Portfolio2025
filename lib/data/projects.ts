import intercom from '@/public/Intercom.png'
import swagger from '@/public/Swagger.png'
import Vercel from '@/public/vercel.png'
import byteBazar from '@/public/byte-bazar.png'
import lasVpn from '@/public/laslesvpn.png'
import luxury from '@/public/luxury.png'
import storageApp from "@/public/StorageApp.png"

export const screenshotsUrls = [
  {
    image: storageApp,
    name: 'Storage App',
    url: 'https://storage-web-phi.vercel.app/',
    github: 'https://github.com/EmanuelFuneS/storage-cross-platform',
    description:
      'Desarrollé una aplicación de almacenamiento en la nube usando AWS S3 y CloudFront para una recuperación eficiente de datos, desplegada en Vercel con Next.js, React, TypeScript y Tailwind, que permite a los usuarios subir y gestionar archivos de forma segura con acceso global de baja latencia.',
  },
  {
    image: Vercel,
    name: 'CMS EdTech',
    url: 'https://cms-14-dev.vercel.app/',
    github:
      'https://github.com/No-Country-simulation/S03-26-Equipo-14-Web-App-Development/tree/dev',
    description:
      'Construí un CMS EdTech para gestionar testimonios e historias de éxito, con autenticación basada en roles, integración con YouTube y Cloudinary para contenido multimedia, creación de testimonios en texto, imagen y video, clasificación por categorías y etiquetas, sistema de moderación y revisión, búsqueda inteligente, widgets embebibles con una librería NPM, y una API pública para sitios web externos.',
  },
  {
    image: byteBazar,
    name: 'E-Commerce ByteBazar',
    url: 'https://e-commerce-byte-bazar.vercel.app/',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/byte-bazar',
    description:
      'Plataforma de e-commerce full-stack para la venta de insumos tecnológicos con listado de productos, gestión de carrito y autenticación segura. Arquitectura monorepo con Turborepo, compuesta por un micro-frontend de autenticación (Auth App) con validación Zod y React Hook Form, respaldado por un microservicio dedicado (Auth Service) con NestJS y JWT. Stack: Next.js (App Router), TypeScript, Tailwind CSS, Prisma (ORM), PostgreSQL (Supabase), Cloudinary (multimedia), Docker y desplegado en Vercel.',
  },
  {
    image: intercom,
    name: 'Intercom',
    url: 'https://webs-intercom.vercel.app/',
    github: 'https://github.com/EmanuelFuneS/Webs/tree/main/apps/intercom',
    description:
      'Creé un sitio estático con Next.js (SSG), React, TypeScript y Tailwind CSS, estructurado como monorepo. Obtiene y descarga contenido e imágenes desde un CMS headless Strapi en tiempo de compilación para un despliegue completamente estático.',
  },
  /* 
  {
    image: github,
    name: 'ClimApp',
    url: 'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    github:
      'https://github.com/EmanuelFuneS/react-native-apps/tree/main/apps/native',
    description:
      'Cross-platform mobile weather application built with React Native and Expo, targeting both iOS and Android from a single codebase. Consumes the WeatherAPI to display real-time weather conditions, forecasts, and location-based data. Focuses on a clean, intuitive UI optimized for mobile interactions.',
  },
  {
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
      'Maqueté una landing page responsive pixel-perfect para un servicio de VPN ficticio, realizada como un challenge frontend para demostrar precisión en la UI y estructura de componentes. Desarrollada con Next.js, React, TypeScript y Tailwind CSS, siguiendo fielmente un diseño de Figma. Enfatiza un layout limpio, componentes reutilizables y diseño responsive en todos los tamaños de pantalla. Desplegada en Vercel.',
  },
  {
    image: luxury,
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
    github: 'https://github.com/EmanuelFuneS/Simple-design-hotel-web',
    description:
      'Diseñé y desarrollé un sitio web de reservas de hotel moderno y elegante con un enfoque de diseño minimalista. Construido con Next.js, React, TypeScript y Tailwind CSS, el sitio incluye exploración de habitaciones, una interfaz de reserva limpia y navegación fluida. Se enfoca en la jerarquía visual y la experiencia de usuario, demostrando principios de diseño web contemporáneo en el sector hotelero. Desplegado en Vercel.',
  },
  {
    image: swagger,
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
    github: 'https://github.com/EmanuelFuneS/todo-Api',
    description:
      'Construí una API RESTful para una aplicación de tareas con Python y FastAPI, con documentación interactiva automática mediante Swagger UI. Implementa operaciones CRUD completas con MongoDB como base de datos NoSQL. Incluye una suite de tests exhaustiva escrita con PyTest para garantizar la confiabilidad de los endpoints y la integridad de los datos. Preparada para containerización y desplegada en Railway.',
  },
]
