import { createContext, useState, useContext, useEffect, useCallback } from 'react'

const ToastContext = createContext()

function ToastItem({ toast, onRemove }) {
    const [isClosing, setIsClosing] = useState(false)
    const { id, message, type, title } = toast

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' }
    const titles = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' }

    const handleClose = () => {
        if (isClosing) return
        setIsClosing(true)
        setTimeout(() => onRemove(id), 300)
    }

    useEffect(() => {
        const timer = setTimeout(handleClose, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div 
            className={`toast ${type}`} 
            style={isClosing ? { animation: 'toastOut 0.3s ease forwards' } : {}}
            onClick={handleClose}
        >
            <div className="toast-icon">{icons[type]}</div>
            <div className="toast-content">
                <div className="toast-title">{title || titles[type]}</div>
                <div className="toast-msg">{message}</div>
            </div>
        </div>
    )
}

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const showToast = useCallback((message, type = 'info', title = '') => {
        const id = crypto.randomUUID()
        setToasts((prevToasts) => [...prevToasts, { id, message, type, title }])
    }, [])

    const removeToast = useCallback((id) => {
        setToasts((prevToasts) => prevToasts.filter(t => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            
            <div className="toast-container" id="toastContainer">
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export {ToastProvider}
export const useToast = () => useContext(ToastContext)