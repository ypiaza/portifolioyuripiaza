import { moreProjects } from "../data/projects"

const MoreProjects = () => {
    return (
        <div>
            {moreProjects.map((item) => (
                <div className=" h-full flex items-center justify-center px-12 py-14 rounded-3xl border border-white/10 bg-[#202020] transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/50 hover:bg-blue-500/50 cursor-pointer"
                onClick={() => window.open(item.link)}
                >
                    <div>
                        <div>
                            <h3 className="text-2xl text-white font-bold">{item.title}</h3>
                            <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoreProjects