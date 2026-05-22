function FilterBtn({ filter, label, isActive, onClick }) {
    return (
        <button 
            className={`filter-btn ${isActive ? 'active' : ''}`} 
            data-filter={filter}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default FilterBtn;