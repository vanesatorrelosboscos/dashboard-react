function ToDoTask({ id, text, done, onToggle, onDelete }) {
    return (
            <div className={`todo-item ${done ? 'done' : ''}`} draggable="true">
                <span className="drag-handle">⠿</span>
                <input className="todo-cb" type="checkbox" checked={done} onChange={() => onToggle(id)} />
                <span className="todo-text">{text}</span>
                <button className="todo-del" onClick={() => onDelete(id)}>🗑</button>
            </div>
    )
}

export default ToDoTask