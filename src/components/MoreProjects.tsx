import { moreProjects } from "../data/projects"

const MoreProjects = () => {
    return (
        <div>
            {moreProjects.map((item) => (
                <div className=" h-full flex items-center justify-center px-12 py-14 rounded-3xl border transition-all glass glassButton duration-300 border-blue-500/10 shadow-2xl hover:shadow-blue-500/30 bg-transparent md:bg-blue-500/60 backdrop-blur-sm hover:scale-95 hover:bg-blue-500/60 cursor-pointer"
                onClick={() => window.open(item.link)}
                >
                    <div>
                        <div>
                            <h3 className="md:text-2xl text-white font-bold">{item.title}</h3>
                            <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MoreProjects
