const AvaliableForJob = () => {
    return (
        <div className="hidden md:flex items-center gap-2 border glass shadow-xl shadow-black px-3 py-0.5 rounded-3xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 block animate-pulse"
                style={{
                    boxShadow: '0 0 2px 2px green'
                }}
            ></span>
            <span className="text-sm text-white/80">Disponível para trabalho</span>
        </div>
    )
}

export default AvaliableForJob