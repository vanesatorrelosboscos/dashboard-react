import { createContext, useState, useContext, useEffect, useCallback } from 'react'

const ToastContext = createContext()

function ToastItem({ toast, onRemove }) {
    const [isClosing, setIsClosing] = useState(false)
    const { id, message, type, title } = toast

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' }
    const titles = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' }

    const borderColors = {
        success: 'border-l-[3px] border-l-(--success) [--toast-color:var(--success)]',
        error: 'border-l-[3px] border-l-(--danger) [--toast-color:var(--danger)]',
        warning: 'border-l-[3px] border-l-(--warning) [--toast-color:var(--warning)]',
        info: 'border-l-[3px] border-l-(--accent) [--toast-color:var(--accent)]'
    }

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
            className={`toast bg-(--surface) border border-solid border-(--border) flex items-center p-3.75 rounded-[20px] relative overflow-hidden cursor-pointer ${borderColors[type]}`}
            style={isClosing 
                ? { animation: 'toastOut 0.3s ease forwards' } 
                : { animation: 'toastIn 0.3s ease' }
            }
            onClick={handleClose}
        >
            <div className="text-[18px]">{icons[type]}</div>
            <div className="flex justify-around flex-col ml-3.25">
                <div className="text-sm font-bold">{title || titles[type]}</div>
                <div className="text-xs text-(--muted) -mt-1.25">{message}</div>
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
            <div className="fixed bottom-5 right-5 flex flex-col gap-2.5 z-1000 w-75" id="toastContainer">
                {toasts.map(toast => (
                    <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export { ToastProvider }
export const useToast = () => useContext(ToastContext)