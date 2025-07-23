import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

const TechsSlice = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-6 flex-w'>
      <SiNodedotjs className='w-12 h-12 text-[#339933] hover:scale-110 transition-transform duration-300' />
      <SiTypescript className='w-12 h-12 text-[#336791] hover:scale-110 transition-transform duration-300' />
      <SiNextdotjs className='w-12 h-12 text-black transition-transform duration-300 dark:text-white hover:scale-110' />
      <SiReact className='w-12 h-12 text-[#61DAFB] hover:scale-110 transition-transform duration-300' />
      <SiHtml5 className='w-12 h-12 text-[#E34F26] hover:scale-110 transition-transform duration-300' />
      <SiCss3 className='w-12 h-12 text-[#1572B6] hover:scale-110 transition-transform duration-300' />
      <SiPostgresql className='w-12 h-12 text-[#336791] hover:scale-110 transition-transform duration-300' />
    </div>
  )
}

export default TechsSlice
