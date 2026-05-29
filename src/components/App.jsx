import { useState, useEffect } from "react"
import NavBar from "./organisms/NavBar"
import SideBar from "./organisms/SideBar"
import MainContent from "./templates/MainContent"

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 670px)')
        const handleResize = (e) => {
            if (e.matches) setIsMenuOpen(false)
        }
        mediaQuery.addEventListener('change', handleResize)
        return () => mediaQuery.removeEventListener('change', handleResize)
    }, [])

    return (
        <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] min-h-screen max-[1024px]:grid-cols-[200px_1fr] max-[670px]:grid-cols-1">
            <NavBar onToggleMenu={toggleMenu} />
            <SideBar isMenuOpen={isMenuOpen} />
            <MainContent /> 

            <div 
                className={`fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out z-40 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`} 
                onClick={toggleMenu}
            ></div>
        </div>
    )
}

export default App