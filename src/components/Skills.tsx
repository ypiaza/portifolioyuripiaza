import { useEffect, useState } from "react"
import { skills, type itemSkill } from "../data/skills"

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setActiveIndex(index)
      index = (index + 3) % skills.length // reinicia quando chega no final
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='hidden md:grid md:grid-cols-8 p-[0.1rem] overflow-hidden text-transparent glass rounded-3xl shadow-2xl shadow-black/30 '>
      {skills.map((item: itemSkill, index) => (
        <div
          key={index}
          className={`text-4xl flex items-center p-5 justify-center transition-all duration-1000 ${
            activeIndex === index ? ' glass' : 'delay-500'
          }`}
        >
          <item.icon className={`z-50 transition-all duration-300 text-white`} />
        </div>
      ))}
    </div>
  )
}

export default Skills
