function NavBarBtn({ id, title, icon, onClick }) {
    return (
        <button 
            className="icon-btn" 
            id={id} 
            title={title} 
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default NavBarBtn