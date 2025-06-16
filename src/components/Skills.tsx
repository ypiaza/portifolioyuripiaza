import { skills, type itemSkill } from "../data/skills"


const Skills = () => {

  return (
    <div className='grid grid-cols-8 p-4 overflow-hidden rounded-2xl md:rounded-3xl border text-white/80 border-white/10 bg-[#202020]'>
      {skills.map((item: itemSkill, index) => (
        <div className={`relative text-4xl flex items-center justify-center cursor-pointer`}>
          <item.icon key={index} className='transition-all transform-3d perspective-[1000px] duration-300 hover:rotate-y-180 scale-3d hover:scale-150 z-50'/>
        </div>
      ))}
    </div>
  )
}

export default Skills