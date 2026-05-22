function DragPriority({text, tag, priority}){
    const priorityColors = {
        'high': '#EF4444',
        'medium': '#F59E0B',
        'low': '#10B981'
    };

    return (
        <div className="drag-card" draggable>
            <div className="drag-priority" style={{ background: priorityColors[priority] }}></div>
            <div className="drag-card-text">{text}</div>
            <div className="drag-card-tag">{tag}</div>
        </div>
    )
}

export default DragPriority