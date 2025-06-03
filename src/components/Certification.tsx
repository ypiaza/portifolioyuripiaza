import { certification } from "../data/certification"

const Works = () => {
  return (
    <div className=" flex flex-col items-start h-full px-12 py-14 rounded-3xl border border-white/10 bg-[#202020]">
        <div className="text-white/40 mb-10 font-bold">Certificados:</div>
        <div className="w-full">
            <ul>
                {certification.map((item) => (
                    <li className='mb-5 opacity-90 w-full flex justify-between flex-col'>
                        <p className="font-bold text-blue-500/70">{item.title}</p>
                        <p className="text-white/40 text-sm">{item.about}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Works