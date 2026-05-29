import { useState } from "react"
import HeaderTitle from "../molecules/HeaderTitle"
import QuickAddModal from "./modal/QuickAddModal"
import useShortcut from "../../hooks/useShortcut"
import { useToast } from "../../context/ToastContext"
import Button from "../atoms/Button"

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
            <header className="w-full flex justify-between flex-1 items-center max-[892px]:flex-col max-[892px]:items-start max-[892px]:gap-3.75">
                <HeaderTitle name="John" />
                <div className="flex gap-2.5">
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