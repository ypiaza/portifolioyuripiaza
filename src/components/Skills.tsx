import { skills, type itemSkill } from "../data/skills"

const Skills = () => {

  return (
    <div className='hidden md:grid md:grid-cols-8 p-[0.1rem] overflow-hidden text-transparent glass rounded-3xl shadow-2xl shadow-black/30 '>
      {skills.map((item: itemSkill, index) => (
        <div
          key={index}
          className={`text-4xl flex items-center p-5 justify-center}
        >
          <item.icon className={`z-50 text-white`} />
        </div>
      ))}
    </div>
  )
}

export default Skills
