import navItems from "../../constants/navItems"
import NavItem from "../molecules/NavItem"

function SideBar({ isMenuOpen }) {
  return (
    <aside className={`
        bg-(--surface) p-5 flex flex-col gap-1 shadow-theme border-r border-solid border-(--border)
        max-[670px]:fixed max-[670px]:h-screen max-[670px]:w-[45vw] max-[670px]:left-0 max-[670px]:top-0 max-[670px]:z-100 max-[670px]:-translate-x-full max-[670px]:transition-transform max-[670px]:duration-300 max-[670px]:ease-in-out
        max-[500px]:w-[65vw]
        ${isMenuOpen ? 'max-[670px]:translate-x-0' : ''}
    `}>
        {navItems.map(section => (
            <div key={section.title} className="flex flex-col gap-1">
                <div className="uppercase text-[10px] text-(--muted) font-semibold tracking-[1.5px] mt-2 pt-2.5 pr-1 pb-0 pl-2.5">
                    {section.title}
                </div>
                {section.items.map(item => (
                    <NavItem
                        key={item.id}
                        isActive={item.isActive}
                        icon={item.icon}
                        title={item.title}
                        badge={item.badge}
                        badgeColor={item.badgeColor}
                    />
                ))}
            </div>
        ))}
    </aside>
  )
}

export default SideBar