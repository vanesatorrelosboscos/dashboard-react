import { useState, useRef } from "react"
import useShortcut from "../../../../../../../hooks/useShortcut"
import ToDoInput from "./ToDoInput"
import AddToDoBtn from "./AddToDoBtn"
import InputError from "../../../../../../ui/InputError"

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
                    <ToDoInput 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        inputRef={taskInputRef}
                    />
                    <AddToDoBtn />
                </div>
            </form>
            {showError && <InputError msg="⚠ Please enter a task name." className="todo-error"/>}
        </>
    )
}

export default AddToDo