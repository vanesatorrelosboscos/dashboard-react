import { useState, useRef } from "react"
import useShortcut from "../../../hooks/useShortcut"
import Input from "../../atoms/input/Input"
import Button from "../../atoms/Button"
import InputError from "../../atoms/input/InputError"

function AddToDo({ onAdd }) {
    const [inputValue, setInputValue] = useState('')
    const [showError, setShowError] = useState(false) 

    const taskInputRef = useRef(null)

    useShortcut('m', () => {
        taskInputRef.current?.focus()
    })

    const handleSubmit = (e) => {
        e.preventDefault()

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
                    <Input 
                        id="todoInput"
                        placeholder="Add a new task… (Ctrl+M)"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        inputRef={taskInputRef}
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        id="addTodoBtn"
                        text="+ Add"
                    />
                </div>
            </form>
            {showError && <InputError msg="⚠ Please enter a task name." className="todo-error"/>}
        </>
    )
}

export default AddToDo