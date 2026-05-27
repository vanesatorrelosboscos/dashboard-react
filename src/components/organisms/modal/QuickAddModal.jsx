import { useState } from 'react'
import { useToast } from '../../../context/ToastContext'
import Button from '../../atoms/Button'
import Input from '../../atoms/input/Input'
import Select from '../../atoms/Select'
import Modal from './Modal'

const PRIORITY_OPTIONS = [
    { value: "high", label: "🔴 High" },
    { value: "medium", label: "🟡 Medium" },
    { value: "low", label: "🟢 Low" }
]

const TAG_OPTIONS = ["Design", "Dev", "QA", "Marketing"]

function QuickAddModal({ isOpen, onClose, onAddTask }) {
    const showToast = useToast()
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("medium")
    const [tag, setTag] = useState("Design")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim()){
            showToast("Couldn't add to sprint", "error")
            setTitle("")
            onClose()
            return
        }

        const newTask = {
            id: crypto.randomUUID(),
            text: title,
            priority,
            tag
        }

        onAddTask(newTask)
        showToast(`Task "${title}" added to sprint`, "success")

        setTitle("")
        setPriority("medium")
        setTag("Design")
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="⚡ Quick Add Task">

            <form className="modal-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Task Title</label>
                    <Input 
                        className="form-input"
                        id="modalTaskInput"
                        placeholder="What needs to be done?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="modal-bottom">
                    <Select 
                        label="Priority"
                        id="modalPriority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        options={PRIORITY_OPTIONS}
                    />

                    <Select 
                        label="Tag"
                        id="modalTag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        options={TAG_OPTIONS}
                    />
                </div>
                <Button type="submit" className="primary" id="modalAddBtn" text="Add to Sprint →" />
            </form>
        </Modal>
    )
}

export default QuickAddModal