import { useState } from 'react'

function DragPriority({ id, text, tag, priority, onDrop }) {
    const [isDragging, setIsDragging] = useState(false)
    const [isDragOver, setIsDragOver] = useState(false)

    const priorityColors = {
        'high': '#EF4444',
        'medium': '#F59E0B',
        'low': '#10B981'
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData('custom/sprint-id', id)
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

    let containerClasses = "bg-(--surface2) p-2.5 gap-3 rounded-[10px] flex items-center cursor-grab select-none transition-all duration-300 ease-in-out hover:border-(--primary)"

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
            <div className="size-2.5 rounded-full ml-0.75 shrink-0" style={{ background: priorityColors[priority] }}></div>
            <div className="text-[13px] font-medium flex-1">{text}</div>
            <div className="text-(--muted) text-[11px]">{tag}</div>
        </div>
    )
}

export default DragPriority