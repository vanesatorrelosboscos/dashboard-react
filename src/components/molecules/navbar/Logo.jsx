function Logo({ onHamburgerClick }) {
    return (
        <div className="flex items-center gap-2.5 text-2xl font-semibold text-(--text)">
            <button 
                className="hidden max-[670px]:flex flex-col cursor-pointer bg-transparent border-none outline-none text-(--text) text-2xl mr-3.75" 
                id="hamburger" 
                aria-label="Toggle menu"
                onClick={onHamburgerClick}
            >
                ☰
            </button>
            
            <div className="flex size-9 bg-linear-to-br from-(--primary) to-(--accent) justify-center items-center rounded-[10px] font-extrabold text-[18px] text-white">
                N
            </div>
            
            <div className="text-[18px] font-bold tracking-[-0.5px] max-[670px]:hidden">
                Nexus<span className="text-(--primary)">Corp</span>
            </div>
        </div>
    )
}

export default Logo