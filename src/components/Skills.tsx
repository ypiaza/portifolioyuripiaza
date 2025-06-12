import { skills, type itemSkill } from "../data/skills"

const Skills = () => {

  return (
    <div className='hidden md:grid md:grid-cols-4 md:h-[15rem] overflow-hidden rounded-2xl md:rounded-3xl md:border text-white md:border-white/10 bg-transparent backdrop-blur-sm shadow-2xl shadow-black/30'>
      {skills.map((item: itemSkill, index) => (
        <div
          key={index}
          className='relative text-4xl md:border md:border-white/10 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 bg-blue-500/50 animate-pulse delay-500'>
          <item.icon className='z-50' />
        </div>
      ))}
    </div>
  )
}

export default Skills
