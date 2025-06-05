import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface ProjectProps {
  project: string;
  description: string;
  img: string,
  link: string
}

const Projects: React.FC<ProjectProps> = ({ project, description, img, link }) => {
  const [hoverAnimation, setHoverAnimation] = useState<number | false>(false);

  return (
    <div
      className={`relative flex items-center justify-center p-5 md:px-12 md:py-14 rounded-3xl border border-white/10 bg-[#202020] transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-3d hover:bg-blue-500/50 overflow-hidden`}
    >
      <div
        className="cursor-pointer perspective-distant"
        onMouseOver={() => setHoverAnimation(1)}
        onMouseOut={() => setHoverAnimation(false)}
        onClick={() => window.open(link)}
      >
        <div className="relative">
          <h3 className="md:text-2xl text-white font-bold">{project}</h3>
          <p className="text-sm text-white/70">{description}</p>
          <span
            className={`hidden md:block absolute z-50 top-0 right-0 transition-transform ${hoverAnimation === 1 ? '-translate-x-0' : 'translate-x-28'}`}
          >
            <FaArrowAltCircleRight className="text-4xl -rotate-40 text-white/80" />
          </span>

          <img
            src={img}
            alt={project}
            className={`hidden md:block rounded-2xl shadow-xl w-[30rem] mt-10 duration-300 translate-3d transform-3d scale-3d ${hoverAnimation === 1 ? 'rotate-x-12 -rotate-y-3 -rotate-z-3 scale-110 shadow-2xl shadow-black/50' : ''}`}
          />
        </div>

      </div>
        {/* Mobile */}
        <span
          className={`md:hidden absolute z-50 top-3 right-2 transition-transform`}
        >
          <FaArrowAltCircleRight className="text-xl -rotate-40 text-white/80" />
        </span>
    </div>
  );
};

export default Projects;
