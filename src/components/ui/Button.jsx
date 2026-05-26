const BUTTON_TYPES = {
    outline: "btn btn-outline",
    primary: "btn btn-primary",
    filter: "filter-btn",
    tab: "tab-btn",
    preset: "preset-btn",
    modalClose: "modal-close"
}

function Button({ variant = "primary", type = "button", onClick, text, id, className = "" }) {
    return (
        <button 
            id={id} 
            type={type} 
            className={`${BUTTON_TYPES[variant]} ${className}`.trim()} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button