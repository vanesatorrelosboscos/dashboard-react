const BUTTON_TYPES = {
    outline: "px-3.5 py-1.5 rounded-lg text-[var(--text)] text-[13px] font-extrabold cursor-pointer flex items-center gap-1.5 border border-solid border-[var(--border)] bg-transparent transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:text-[var(--primary)]",
    primary: "px-3.5 py-1.5 rounded-lg text-white text-[13px] font-extrabold cursor-pointer flex items-center gap-1.5 bg-[var(--primary)] border-none transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)]",
    preset: "bg-transparent border border-solid border-[var(--border)] text-[var(--muted)] text-xs px-2.5 py-1 rounded-[7px] cursor-pointer transition-all duration-300 ease-in-out hover:border-[var(--primary)] hover:text-[var(--primary)]",
    modalClose: "bg-transparent border-none text-[18px] text-[var(--muted)] cursor-pointer px-2 py-0.5 rounded-lg select-none transition-all duration-300 ease-in-out hover:bg-[var(--surface2)] hover:text-[var(--text)]",
    icon: "border border-solid border-[var(--border)] text-[var(--muted)] text-[18px] px-3 py-1.5 rounded-[var(--radius)] h-[38px] w-[38px] bg-[var(--surface2)] justify-center flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:border-[var(--primary)]",
    
    filter: (isActive) => `
        px-3.5 py-1 rounded-md border border-solid text-xs cursor-pointer flex items-center gap-1.5 transition-all duration-300 ease-in-out
        ${isActive 
            ? 'bg-[var(--primary)] border-[var(--primary)] text-white' 
            : 'bg-transparent border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
        }
    `,
    
    tab: (isActive) => `
        flex flex-col border-none px-4.5 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-300 ease-in-out rounded-[var(--radius)]
        ${isActive 
            ? 'text-[var(--text)] bg-[var(--surface)]' 
            : 'bg-transparent text-[var(--muted)] hover:text-[var(--text)]'
        }
    `
}

function Button({ variant = "primary", type = "button", onClick, text, id, className = "", title, isActive = false }) {
    
    const buttonStyle = BUTTON_TYPES[variant];
    
    const finalVariantClass = typeof buttonStyle === "function" 
        ? buttonStyle(isActive) 
        : buttonStyle;

    return (
        <button 
            id={id} 
            title={title}
            type={type} 
            className={`${finalVariantClass} ${className}`} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;