import { useState } from "react"
import NavBar from "./organisms/NavBar"
import SideBar from "./organisms/SideBar"
import MainContent from "./templates/MainContent"

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] min-h-screen">
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