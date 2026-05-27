import navItems from "../../constants/navItems"
import NavItem from "../molecules/NavItem"

function SideBar({ isMenuOpen }) {
  return (
    <aside className={`sidebar ${isMenuOpen && 'active'}`}>
        {navItems.map(section => (
            <div key={section.title} className="sidebar-group">
                <div className="sidebar-section">{section.title}</div>
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