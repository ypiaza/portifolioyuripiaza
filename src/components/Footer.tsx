import { menuFooter } from "../data/menu"
import AvaliableForJob from "./AvaliableForJob"

const Footer = () => {
  return (
    <div className='fixed z-50 bottom-2 md:flex items-center justify-center md:justify-between w-[96%] md:w-[91.7%] px-12 py-5 rounded-3xl border border-white/10 bg-[#202020]/50 backdrop-blur-md mt-2'>
      <div>
        <ul className="flex items-center justify-center gap-3 ">
          {menuFooter.map((item) => (
            <li><a target="_blank" href={item.link}><item.icon className='text-white text-2xl hover:text-blue-500' /></a></li>
          ))}
        </ul>
      </div>
      <AvaliableForJob />
    </div>
  )
}

export default Footer