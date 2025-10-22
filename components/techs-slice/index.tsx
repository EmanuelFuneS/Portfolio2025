import {
  SiCss3,
  SiDocker,
  SiFastapi,
  SiHtml5,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiTurborepo,
  SiTypescript,
  SiYarn,
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
      <SiPrisma className='w-12 h-12 text-[#2D3748] hover:scale-110 transition-transform duration-300' />
      <SiMysql className='w-12 h-12 text-[#4479A1] hover:scale-110 transition-transform duration-300' />
      <SiPython className='w-12 h-12 text-[#3776AB] hover:scale-110 transition-transform duration-300' />
      <SiFastapi className='w-12 h-12 text-[#009688] hover:scale-110 transition-transform duration-300' />
      <SiPnpm className='w-12 h-12 text-[#F69220] hover:scale-110 transition-transform duration-300' />
      <SiYarn className='w-12 h-12 text-[#2C8EBB] hover:scale-110 transition-transform duration-300' />
      <SiNpm className='w-12 h-12 text-[#CB3837] hover:scale-110 transition-transform duration-300' />
      <SiTurborepo className='w-12 h-12 text-[#FF3E00] hover:scale-110 transition-transform duration-300' />
      <SiDocker className='w-12 h-12 text-[#2496ED] hover:scale-110 transition-transform duration-300' />
      <SiStyledcomponents className='w-12 h-12 text-[#DB7093] hover:scale-110 transition-transform duration-300' />
    </div>
  )
}

export default TechsSlice
