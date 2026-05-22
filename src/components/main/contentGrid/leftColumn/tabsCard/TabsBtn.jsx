
function TabsBtn({ tab, isActive, icon, label, onClick }) {
    return (
        <button
            className={`tab-btn ${isActive ? 'active' : ''}`}
            data-tab={tab}
            onClick={() => onClick(tab)}
        >
            {icon} {label}
        </button>
    )
}

export default TabsBtn


