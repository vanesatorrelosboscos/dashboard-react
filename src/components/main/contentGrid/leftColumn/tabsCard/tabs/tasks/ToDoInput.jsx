function ToDoInput({ value, onChange, inputRef }) {
    return (
        <input 
            type="text" 
            id="todoInput" 
            placeholder="Add a new task… (Ctrl+M)" 
            value={value}
            onChange={onChange}
            ref={inputRef}
        />
    )
}

export default ToDoInput