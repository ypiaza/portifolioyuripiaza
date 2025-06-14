import { certification } from "../data/certification"

const Certification = () => {
  return (
    <div className=" flex flex-col items-start h-full px-12 py-14 rounded-3xl glass shadow-2xl shadow-black/30">
        <div className="text-white/70 mb-10 font-bold">Certificados:</div>
        <div className="w-full">
            <ul>
                {certification.map((item) => (
                    <li className='mb-5 opacity-90 w-full flex justify-between flex-col'>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-white/60 text-sm">{item.about}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Certification
