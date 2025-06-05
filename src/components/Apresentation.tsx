import { btn } from "../data/buttons"
import img from '../assets/me.png'
import AvaliableForJob from "./AvaliableForJob"

const Apresentation = () => {

    return (
        <div className="relative flex w-full lg:grid lg:grid-cols-2 items-center justify-between h-full lg:h-[25rem] p-10 md:p-14 rounded-3xl border border-white/10 bg-[#202020]">
            <div className="h-full w-full flex flex-col items-center md:items-start justify-between">
                <div>
                    <h1 className="text-white/70 text-sm md:text-md">Desenvolvedor Frontend</h1>
                </div>
                <div>
                    <div className='items-center flex flex-col justify-center md:max-w-80 md:block'>
                        <h2 className="text-2xl font-semibold text-white">Eu sou Yuri Piaza</h2>
                        <p className="text-sm text-white/70 mt-5 text-center md:text-start">Crio interfaces bonitas e escaláveis, desenvolvedor frontend com foco em desenvolvimento web!</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-8">
                        {btn.map((item, index) => (
                            <div key={index} className=" cursor-pointer flex items-center justify-center border-2 rounded overflow-hidden border-white/10">

                                <button className={`hidden md:block px-2 py-0.75 text-white font-medium cursor-pointer`}
                                    style={{
                                        backgroundColor: item.color,
                                    }}
                                    onClick={() => window.open(item.link)}
                                >
                                    {item.name}
                                </button>

                                <div>
                                    <item.icon className='text-3xl border-l-2 border-white/10 text-white px-1'
                                        style={{
                                            backgroundColor: item.color,
                                            boxShadow: `0 0 10px 5px ${item.color}70`
                                        }} />
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-end w-full h-full">
                <div className="flex flex-col items-center justify-between h-full">
                    <AvaliableForJob />
                    <div>
                        <img className="rounded-full w-52 border-6 shadow-2xl bg-center bg-cover border-white/10" src={img} alt="Me" />
                    </div>

                </div>
            </div>
            {/* Versão mobile */}
            <div className="block absolute md:hidden top-2 left-2">
                <img className="rounded-full w-10 border-2 shadow-2xl bg-center bg-cover border-blue-500/50 shadow-blue-500" src={img} alt="Me" />
            </div>
        </div>
    )
}

export default Apresentation