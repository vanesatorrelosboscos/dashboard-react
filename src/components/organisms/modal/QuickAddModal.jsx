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
            <form className="px-5.5 py-5" onSubmit={handleSubmit}>
                <Input 
                    label="Task Title"
                    id="modalTaskInput"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-3">
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
                <Button type="submit" className="w-full p-2.5! mt-1" text="Add to Sprint →" />
            </form>
        </Modal>
    )
}

export default QuickAddModal