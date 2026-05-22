import SideBarSection from "./SidebarSection"
import {menuItems, toolsItems, accountItems} from "./navItems"
import NavItem from "./NavItem"

function SideBar({isMenuOpen}) {
  return (
    <aside className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <SideBarSection title="Main Menu" />
        {menuItems.map(item => <NavItem
            key={crypto.randomUUID()}
            isActive={item.isActive}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
            badgeColor={item.badgeColor}
        />)}
        
        <SideBarSection title="Tools" />
        {toolsItems.map(item => <NavItem
            key = {crypto.randomUUID()}
            isActive = {item.isActive}
            icon = {item.icon}
            title = {item.title}
        />)}

        <SideBarSection title="Account" />
        {accountItems.map(item => <NavItem
            key = {crypto.randomUUID()}
            isActive = {item.isActive}
            icon = {item.icon}
            title = {item.title}
        />)}
    </aside>
  )
}


export default SideBar