import { useState } from 'react'

function ToDoTask({ id, text, done, onToggle, onDelete, onDrop }) {
    const [isDragging, setIsDragging] = useState(false)
    const [isDragOver, setIsDragOver] = useState(false)
    
    const handleDragStart = (e) => {
        e.dataTransfer.setData('custom/todo-id', id)
        setTimeout(() => setIsDragging(true), 0)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleLocalDrop = (e) => {
        setIsDragOver(false)
        onDrop(e)
    }

    let containerClasses = "flex items-center gap-3 bg-(--surface2) rounded-[10px] py-3 px-3.5 transition-all duration-300 ease-in-out cursor-grab hover:border-(--primary)"
    
    if (isDragging) {
        containerClasses += " opacity-40 border-2 border-dashed border-(--primary)"
    } else if (isDragOver) {
        containerClasses += " border-2 border-solid border-(--accent) translate-y-0.5 bg-(--accent)/5"
    } else {
        containerClasses += " border border-solid border-(--border)"
    }

    return (
        <div 
            className={containerClasses}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleLocalDrop}
        >
            <span className="text-(--muted) cursor-grab text-[16px] select-none">⠿</span> 
            
            <input 
                className="size-4.5 accent-(--primary) cursor-pointer shrink-0" 
                type="checkbox" 
                checked={done} 
                onChange={() => onToggle(id)} 
            />
            
            <span className={`flex-1 text-[14px] transition-all duration-300 ease-in-out ${done ? 'line-through text-(--muted)' : 'text-(--text)'}`}>
                {text}
            </span>
            
            <button 
                className="bg-transparent border-none text-(--muted) cursor-pointer text-[16px] transition-all duration-300 ease-in-out py-0.5 px-1.5 rounded-md hover:bg-red-500/15 hover:text-(--danger)" 
                onClick={() => onDelete(id)}
            >
                🗑
            </button>
        </div>
    )
}

export default ToDoTask