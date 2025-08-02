import CardProject from '@/components/card-project'

const screenshotsUrls = [
  {
    name: 'Simple Design Hotel',
    url: 'https://simple-design-hotel-web.vercel.app/',
  },
  {
    name: 'Todo API Documentation',
    url: 'https://todo-api-production-877c.up.railway.app/docs',
  },
]
const Page = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-auto px-10 m-10 '>
      {screenshotsUrls.map((project, index: number) => (
        <CardProject key={index} url={project.url} name={project.name} />
      ))}
    </div>
  )
}

export default Page
