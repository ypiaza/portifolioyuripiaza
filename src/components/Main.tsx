import { projects } from "../data/projects"
import Certification from "./Certification"
import MoreProjects from "./MoreProjects"
import Projects from "./Projects"
import Skills from "./Skills"

const Main = () => {
  return (
    <div className="h-full grid lg:grid-cols-2 grid-cols-1 gap-2 mt-2">
      {/* Visão desktop */}
      <div className="hidden lg:grid h-full w-full gap-2">
        <Certification />
        {projects.filter((item) => item.id === 1).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
        <MoreProjects />
      </div>

      <div className="hidden lg:grid h-full w-full gap-2">
        <Skills />
        {projects.filter((item) => item.id === 2).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
        {projects.filter((item) => item.id === 3).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
      </div>

      {/* Visão mobile */}
      <div className="grid gap-2 md:hidden">
        <Certification />

        <div className="rounded-3xl border border-white/10 p-5 bg-blue-500/70 shadow-2xl shadow-blue-500/30 z-40">
          <h3 className="font-bold text-white/90 text-xl text-center ">Projetos</h3>
        </div>

        <div className="grid grid-cols-2 gap-2">

          {projects.filter((item) => item).map((item) => (
            <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
          ))}
        <MoreProjects />

        </div>

      </div>
    </div>
  )
}

export default Main