import { useEffect } from 'react'
import ShortCutItem from './ShortcutItem'
import shortcutsData from './shortcutsData'
import Button from '../../ui/Button'

function ShortcutsModal({ isOpen, onClose }) {
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

    if (!isOpen) return null

    return (
        <div 
            className="overlay" 
            id="shortcutsOverlay" 
            onClick={onClose}
            style={{ display: 'flex' }}
        >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <span className="modal-title">⌨️ Keyboard Shortcuts</span>
                    <Button id="shortcutsClose" variant="modalClose" text="✕" onClick={onClose}/>
                </div>
                
                <div className="modal-body">
                    <div className="shortcuts-grid">
                        {shortcutsData.map(sc => (
                            <ShortCutItem 
                                key = {crypto.randomUUID()}
                                action = {sc.action}
                                keys = {sc.keys}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShortcutsModal