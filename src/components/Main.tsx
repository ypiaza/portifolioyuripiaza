import { projects } from "../data/projects"
import Certification from "./Certification"
import MoreProjects from "./MoreProjects"
import Projects from "./Projects"
import Skills from "./Skills"

const Main = () => {
  return (
    <div className="mt-3 h-full grid lg:grid-cols-2 grid-cols-1 gap-3">
      {/* Visão desktop */}
      <div className="hidden lg:grid h-full w-full gap-3">
        <Certification />
        {projects.filter((item) => item.id === 1).map((item) => (
          <Projects description={item.description} img={item.img} project={item.project} link={item.link} />
        ))}
        <MoreProjects />
      </div>

      <div className="hidden lg:grid h-full w-full gap-3">
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