function NavItem({ isActive, icon, title, badge, badgeColor }) {
    const navClass = `flex items-center rounded-(--radius) transition-(--transition) text-[14px] h-[40.5px] w-[227px] py-2 px-3.5 font-medium cursor-pointer ${
        isActive 
            ? "bg-[rgba(79,70,229,0.15)] text-(--primary)" 
            : "text-(--muted) hover:bg-(--surface2) hover:text-(--text)"
    }`

    const badgeColors = {
        'green': 'bg-(--success)'
    }
    const currentBadgeBg = badgeColors[badgeColor] || 'bg-(--primary)'

    return (
        <a className={navClass}>
            <span className="size-5 inline-flex justify-center items-center mr-2.5">
                {icon}
            </span> 
            {title}
            
            {badge && (
                <span className={`${currentBadgeBg} text-white text-[10px] py-0.5 px-1.5 rounded-[20px] ml-auto font-bold w-5.25 h-4 flex justify-center items-center`}>
                    {badge}
                </span>
            )}
        </a>
    )
}

export default NavItem