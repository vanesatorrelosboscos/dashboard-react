import { useState } from "react"
import NavBar from "./organisms/NavBar"
import SideBar from "./organisms/SideBar"
import MainContent from "./templates/MainContent"

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className="app">
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