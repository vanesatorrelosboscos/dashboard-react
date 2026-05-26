import { useEffect, useState } from 'react'
import { useToast } from '../../../context/ToastContext'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import Select from '../../ui/Select'

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

    useEffect(() => {
        if (!isOpen) return

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.paddingRight = `${scrollbarWidth}px`
        document.body.style.overflow = "hidden"

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.paddingRight = "0"
            document.body.style.overflow = ""
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

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
            priority: priority,
            tag: tag
        }

        onAddTask(newTask)
        showToast(`Task "${title}" added to sprint`, "success")

        setTitle("")
        setPriority("medium")
        setTag("Design")
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="overlay" id="overlay" onClick={onClose} style={{ display: 'flex' }}>
            <div className="modal" id="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-title">⚡ Quick Add Task</span>
                    <Button id="modalClose" variant="modalClose" text="✕" onClick={onClose}/>
                </div>
                
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
            </div>
        </div>
    )
}

export default QuickAddModal