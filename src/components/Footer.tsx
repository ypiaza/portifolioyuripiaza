import { useState } from "react"
import { menuFooter } from "../data/menu"
import AvaliableForJob from "./AvaliableForJob"
import { CgClose } from "react-icons/cg"
import { RiMenu4Fill } from "react-icons/ri";


const Footer = () => {
  const [btnFloat, setBtnFloat] = useState(false)

  return (
    <div className='fixed z-50 bottom-4 right-4 md:static md:flex items-center justify-center md:justify-between md:w-full px-3 md:px-12 py-3 md:py-4 rounded-3xl border border-white/10 bg-[#202020]/40 md:bg-[#202020]  backdrop-blur-sm mt-2'>

      <RiMenu4Fill onClick={()=>setBtnFloat(true)} className={`animate-pulse cursor-pointer text-5xl md:text-4xl text-white ${btnFloat ? 'hidden' : 'block'}`} />


      <div>
        <ul className={`flex-col md:flex-row items-center justify-center gap-5 md:gap-10 transition-all duration-300 ${btnFloat === false ? 'hidden' : 'flex'}`}>
          <li onClick={() => setBtnFloat(false)} className={`hidden md:block text-5xl md:text-4xl mt-10 md:mt-0 text-white list-none ${btnFloat === false ? 'hidden' : 'block'}`}><CgClose className="cursor-pointer" /></li>
          {menuFooter.map((item) => (
            <li><a target="_blank" href={item.link}><item.icon className='text-white text-5xl md:text-4xl hover:text-blue-500/50 transition-all duration-300' /></a></li>
          ))}
        </ul>
        <li onClick={() => setBtnFloat(false)} className={`block md:hidden text-5xl md:text-4xl mt-10 md:mt-0 text-white list-none ${btnFloat === false ? 'hidden' : 'block'}`}><CgClose /></li>
      </div>
      <AvaliableForJob />
    </div>
  )
}

export default Footer
