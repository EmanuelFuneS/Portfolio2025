import intercom from '@/public/Intercom.png'
import swagger from '@/public/Swagger.png'
import Vercel from '@/public/vercel.png'
import agile from '@/public/agileStrat.png'
import authApp from '@/public/auth-app.png'
import byteBazar from '@/public/byte-bazar.png'
import github from '@/public/github.jpg'
import lasVpn from '@/public/laslesvpn.png'
import luxury from '@/public/luxury.png'

export const screenshotsUrls = [
  {
    image: Vercel,
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
      'Actualmente estoy desarrollando una plataforma de e-commerce full-stack con arquitectura monorepo usando Turborepo para la gestión eficiente de múltiples paquetes. Incluye listado de productos, gestión de carrito y autenticación segura mediante JWT. El stack incluye Next.js (App Router), TypeScript y Tailwind CSS en el frontend, con Prisma como ORM conectado a PostgreSQL en Supabase. Los recursos multimedia se manejan con Cloudinary y todo el entorno está containerizado con Docker. Desplegado en Vercel.',
  },
  {
    image: intercom,
    name: 'Intercom',
    url: 'https://webs-intercom.vercel.app/',
    github: 'https://github.com/EmanuelFuneS/Webs/tree/main/apps/intercom',
    description:
      'Creé un sitio estático con Next.js (SSG), React, TypeScript y Tailwind CSS, estructurado como monorepo. Obtiene y descarga contenido e imágenes desde un CMS headless Strapi en tiempo de compilación para un despliegue completamente estático.',
  },
  {
    image: github,
    name: 'Intercom-Strapi-Api',
    url: null,
    github: 'https://github.com/EmanuelFuneS/Webs/tree/main/apps/strapi-app',
    description:
      'Implementé un CMS headless con Strapi que expone una API REST para la gestión de contenido y medios. Incluye un pipeline de descarga local de contenido e imágenes para soportar la generación de sitios estáticos en el frontend.',
  },
  {
    image: authApp,
    name: 'Auth App',
    url: 'https://e-commerce-byte-bazar.vercel.app/auth/login/',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-app',
    description:
      'Desarrollé un micro-frontend independiente enfocado completamente en el flujo de autenticación, diseñado para integrarse sin problemas en arquitecturas de micro-frontends más grandes. Construido con React y Vite para un bundling rápido, implementa validación estricta de formularios del lado del cliente usando Zod y React Hook Form, asegurando una experiencia de usuario fluida y confiable. Estilizado con Tailwind CSS y containerizado con Docker. Desplegado como sitio estático en Render. Utilizado en Byte-Bazar, conectado con Auth-Service.',
  },
  {
    image: swagger,
    name: 'Auth Service',
    url: 'https://auth-service-dltg.onrender.com/docs',
    github:
      'https://github.com/EmanuelFuneS/e-commerce/tree/main/apps/auth-service',
    description:
      'Creé un microservicio de autenticación dedicado con NestJS y TypeScript, diseñado para ser consumido por aplicaciones frontend desacopladas. Maneja registro de usuarios, inicio de sesión y gestión de tokens mediante JWT. Utiliza Redis para caché de sesiones y lista negra de tokens, y Supabase (PostgreSQL) como base de datos principal. El servicio está completamente containerizado con Docker, lo que lo hace portátil y fácil de escalar. Desplegado en Render. Utilizado en Auth-App con ByteBazar.',
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
  {
    image: agile,
    name: 'AgileStrat',
    url: 'https://agilestrat-frontend.vercel.app/',
    github: null,
    description:
      'Creé una aplicación web para soportar flujos de trabajo de gestión ágil de proyectos, construida con React, TypeScript y Vite para una experiencia rápida y responsiva. Cuenta con una UI limpia elaborada con CSS personalizado, proporcionando a los equipos herramientas para organizar y visualizar sus estrategias de manera efectiva. Desplegada en Vercel.',
  },
]
