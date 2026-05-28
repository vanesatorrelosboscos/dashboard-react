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
                className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            ></div>
        </div>
    )
}

export default App