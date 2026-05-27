function NavItem({ isActive, icon, title, badge, badgeColor }) {
    return (
        <a className={isActive ? "nav-item active" : "nav-item"}>
            <span className="nav-icon">{icon}</span> {title}
            
            {badge && (
                <span className={`nav-badge ${badgeColor ? badgeColor : ""}`}>
                    {badge}
                </span>
            )}
        </a>
    );
}

export default NavItem