import { useState } from "react"
import { skills, type itemSkill } from "../data/skills"

const Skills = () => {
  const [hoverIcon, setHoverIcon] = useState<number | null>(null)

  return (
    <div className='hidden md:grid md:grid-cols-4 md:h-[15rem] overflow-hidden rounded-2xl md:rounded-3xl md:border text-white md:border-white/10 bg-transparent backdrop-blur-sm shadow-2xl shadow-black/30'>
      {skills.map((item: itemSkill, index) => (
        <div
          key={index}
          onMouseOver={() => setHoverIcon(index)}
          onMouseOut={() => setHoverIcon(null)}
          className={`relative text-4xl md:border md:border-white/10 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 ${
            hoverIcon === index ? 'bg-blue-700/70' : 'bg-blue-500/50'
          }`}
        >
          <item.icon className='z-50' />
        </div>
      ))}
    </div>
  )
}

export default Skills
