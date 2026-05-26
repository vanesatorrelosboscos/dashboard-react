import { useState } from "react"
import HeaderTitle from "./HeaderTitle"
import QuickAddModal from "./QuickAddModal"
import useShortcut from "../../../hooks/useShortcut"
import { useToast } from "../../../context/ToastContext"
import Button from "../../ui/Button"

function Header({ onAddTask }) {
    const showToast = useToast()
    
    const [isQAOpen, setIsQAOpen] = useState(false)
    const handleOpenQA = (e) => {
        e?.currentTarget.blur()
        setIsQAOpen(true)
    }
    const handleCloseQA = () => setIsQAOpen(false)

    useShortcut("e", () => setIsQAOpen(true))

    const handleDemoToast = () => {
        ['success','error','warning','info'].forEach((text, index) =>
            setTimeout(() => showToast(`This is a ${text} notification!`, text), index * 300))
    }

    return (
        <>
            <header className="page-header">
                <HeaderTitle name="John" />
                <div className="btn-container">
                    <Button 
                        variant="outline"
                        text="⚡ Quick Add"
                        id="openModalBtn"
                        onClick={handleOpenQA}
                    />
                    
                    <Button 
                        variant="primary"
                        text="🎉 Demo Toast"
                        id="showToastDemo"
                        onClick={handleDemoToast}
                    />                
                </div>
            </header>

            <QuickAddModal 
                isOpen={isQAOpen} 
                onClose={handleCloseQA} 
                onAddTask={onAddTask}
            />
        </>
    )
}

export default Header