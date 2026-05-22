import { useState, useEffect } from "react"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import navBarButtons from "./navBarButtons"
import NavBarBtn from "./NavBarBtn"
import Avatar from "./Avatar"
import ShortcutsModal from "./shortcutsModal/ShortcutsModal"
import useShortcut from "../../hooks/useShortcut"
import { useToast } from "../../context/ToastContext"

function NavBar({ onToggleMenu }) {
    const showToast = useToast()

    const [isLightMode, setIsLightMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === 'light') return true
        if (savedTheme === 'dark') return false
        return window.matchMedia('(prefers-color-scheme: light)').matches
    })

    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false)

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add("light-mode")
            localStorage.setItem("theme", "light")
        } else {
            document.body.classList.remove("light-mode")
            localStorage.setItem("theme", "dark")
        }
    }, [isLightMode])

    const handleThemeToggle = (e) => {
        e?.currentTarget?.blur?.()
        setIsLightMode(!isLightMode)
        showToast(`Theme switched to ${isLightMode ? 'dark' : 'light'} mode`, "info")
    }
    
    const handleShortcutsOpen = (e) => {
        e?.currentTarget?.blur?.()
        setIsShortcutsOpen(true)
    }
    
    const handleNotifClick = (e) => {
        e?.currentTarget?.blur?.()
        showToast("You have 3 new notifications", "info", "Notifications")
    }

    useShortcut("d", handleThemeToggle)
    useShortcut("b", handleShortcutsOpen)

    return (
        <>
            <nav className="navbar">
                <Logo onHamburgerClick={onToggleMenu} />
                
                <div className="navbar-right">
                    <SearchBar /> 
                    
                    {navBarButtons.map(btn => {
                        if (btn.id === 'themeToggle') {
                            return (
                                <NavBarBtn key={btn.id} id={btn.id} title={btn.title} 
                                    icon={isLightMode ? '☀️' : '🌙'} 
                                    onClick={handleThemeToggle} 
                                />
                            )
                        }
                        
                        if (btn.id === 'shortcutsBtn') {
                            return (
                                <NavBarBtn key={btn.id} id={btn.id} title={btn.title} 
                                    icon={btn.icon} 
                                    onClick={handleShortcutsOpen} 
                                />
                            )
                        }

                        if (btn.id === 'notifBtn') {
                            return (
                                <NavBarBtn key={btn.id} id={btn.id} title={btn.title} 
                                    icon={btn.icon} 
                                    onClick={handleNotifClick} 
                                />
                            )
                        }
                        
                        return null
                    })}

                    <Avatar name="JD" />
                </div>
            </nav>

            <ShortcutsModal 
                isOpen={isShortcutsOpen} 
                onClose={() => setIsShortcutsOpen(false)} 
            />
        </>
    )
}

export default NavBar