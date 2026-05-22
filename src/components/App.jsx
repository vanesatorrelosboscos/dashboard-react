import { useState } from "react"
import NavBar from "./navbar/NavBar"
import SideBar from "./sidebar/SideBar"
import MainContent from "./main/MainContent"

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