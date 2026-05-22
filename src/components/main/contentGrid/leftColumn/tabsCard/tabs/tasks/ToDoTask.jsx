function ToDoTask({ id, text, done, onToggle, onDelete, onDrop }) {
    
    const handleDragStart = (e) => {
        e.dataTransfer.setData('custom/todo-id', id)
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
            className={`todo-item ${done ? 'done' : ''}`} 
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={onDrop}
        >
            <span className="drag-handle">⠿</span> 
            <input className="todo-cb" type="checkbox" checked={done} onChange={() => onToggle(id)} />
            <span className="todo-text">{text}</span>
            <button className="todo-del" onClick={() => onDelete(id)}>🗑</button>
        </div>
    )
}

export default ToDoTask