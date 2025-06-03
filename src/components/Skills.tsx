import { useState } from "react"
import { skills, type itemSkill } from "../data/skills"


const Skills = () => {
  const [hoverIcon, setHoverIcon] = useState<number | false>(false)
  return (
    <div className='grid grid-cols-4 h-[15rem] overflow-hidden rounded-3xl border text-white border-white/10 bg-[#202020] '>
      {skills.map((item: itemSkill, index) => (
        <div className={`relative text-4xl border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 ${hoverIcon === index ? 'bg-blue-500/70 shadow-2xl shadow-blue-500/50 ' : 'delay-500'}`}
        onMouseOver={() => setHoverIcon(index)}
        onMouseOut={() => setHoverIcon(false)}>
          <item.icon className='z-50'/>
        </div>
      ))}
    </div>
  )
}

export default Skills