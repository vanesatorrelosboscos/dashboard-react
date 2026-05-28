import { useState, useEffect } from "react"
import Logo from "../molecules/navbar/Logo"
import SearchBar from "../molecules/navbar/SearchBar"
import Button from "../atoms/Button"
import Avatar from "../atoms/Avatar"
import ShortcutsModal from "./modal/ShortcutsModal"
import useShortcut from "../../hooks/useShortcut"
import { useToast } from "../../context/ToastContext"

function NavBar({ onToggleMenu }) {
    const showToast = useToast()

    const [isLightMode, setIsLightMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? (savedTheme === 'light') : window.matchMedia('(prefers-color-scheme: light)').matches
    })

    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false)

    useEffect(() => {
        if (isLightMode) {
            document.documentElement.classList.add("light-mode")
            document.body.classList.add("light-mode")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.classList.remove("light-mode")
            document.body.classList.remove("light-mode")
            localStorage.setItem("theme", "dark")
        }
    }, [isLightMode])

    const handleThemeToggle = (e) => {
        e?.currentTarget?.blur?.()
        
        const nextMode = !isLightMode
        setIsLightMode(nextMode)
        showToast(`Theme switched to ${nextMode ? 'light' : 'dark'} mode`, "info")
    }
    
    const handleShortcutsOpen = (e) => {
        e?.currentTarget?.blur?.()
        setIsShortcutsOpen(true)
    }
    
    const handleNotifClick = (e) => {
        e?.currentTarget?.blur?.()
        showToast("You have 3 new notifications", "info", "Notifications")
    }

    const NAVBAR_BUTTONS = [
        {
            "id": "themeToggle",
            "title": "Toggle theme",
            "icon": "🌙",
            "onclick": handleThemeToggle
        },
        {
            "id": "shortcutsBtn",
            "title": "Keyboard shortcuts (Ctrl+/)",
            "icon": "⌨️",
            "onclick": handleShortcutsOpen
        },
        {
            "id": "notifBtn",
            "title": "Notifications",
            "icon": "🔔",
            "onclick": handleNotifClick
        }
    ]

    useShortcut("d", handleThemeToggle)
    useShortcut("b", handleShortcutsOpen)

    return (
        <>
            <nav className="navbar">
                <Logo onHamburgerClick={onToggleMenu} />
                
                <div className="navbar-right">
                    <SearchBar /> 
                    
                    {NAVBAR_BUTTONS.map(btn => (
                        <Button 
                            key={btn.id}
                            title={btn.title}
                            text={btn.icon}
                            onClick={btn.onclick}
                            variant="icon"
                        />
                    ))}

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