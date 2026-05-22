function Logo({ onHamburgerClick }) {
    return (
        <div className="navbar-brand">
            <button 
                className="hamburger" 
                id="hamburger" 
                aria-label="Toggle menu"
                onClick={onHamburgerClick}
            >
                ☰
            </button>
            <div className="brand-icon">N</div>
            <div className="brand-name">Nexus<span>Corp</span></div>
        </div>
    )
}

export default Logo