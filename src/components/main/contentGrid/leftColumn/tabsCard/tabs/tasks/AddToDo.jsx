import { useState, useRef } from "react"
import useShortcut from "../../../../../../../hooks/useShortcut"

function AddToDo({ onAdd }) {
    const [inputValue, setInputValue] = useState('')
    const [showError, setShowError] = useState(false) 

    const taskInputRef = useRef(null)

    useShortcut('m', () => {
        taskInputRef.current?.focus()
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) {
            setShowError(true)
            setInputValue('')
            
            setTimeout(() => {
                setShowError(false)
            }, 5000)
            
            return
        }

        setShowError(false)
        onAdd(inputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="todo-input-row">
                    <input 
                        type="text" 
                        id="todoInput" 
                        placeholder="Add a new task… (Ctrl+M)" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        ref={taskInputRef}
                    />
                    <button type="submit" className="btn btn-primary btn-sm" id="addTodoBtn">
                        + Add
                    </button>
                </div>
                
            </form>
            {showError && (
                <div className="todo-error" id="todoError">⚠ Please enter a task name.</div>
            )}
        </>
    )
}

export default AddToDo