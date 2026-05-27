import { useEffect } from 'react'
import CardHeader from '../../molecules/card/CardHeader'
import Button from '../../atoms/Button'

function Modal({ isOpen, onClose, children, title }) {
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
        <div className="overlay" onClick={onClose} style={{ display: 'flex' }}>
            <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                <CardHeader 
                    title={title}
                    button={<Button variant="modalClose" text="✕" onClick={onClose} />} 
                />
    
                {children}
            </div>
        </div>
    )
}

export default Modal