function DragPriority({ id, text, tag, priority, onDrop }){
    const priorityColors = {
        'high': '#EF4444',
        'medium': '#F59E0B',
        'low': '#10B981'
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData('custom/sprint-id', id)
        setTimeout(() => e.target.classList.add('dragging'), 0)
    }

    const handleDragEnd = (e) => {
        e.target.classList.remove('dragging')
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.currentTarget.classList.add('drag-over')
    }

    const handleDragLeave = (e) => {
        e.currentTarget.classList.remove('drag-over')
    }

    return (
        <div 
            className="drag-card" 
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={onDrop}
        >
            <div className="drag-priority" style={{ background: priorityColors[priority] }}></div>
            <div className="drag-card-text">{text}</div>
            <div className="drag-card-tag">{tag}</div>
        </div>
    )
}

export default DragPriority