import { useEffect, useRef } from 'react'

function useShortcut(targetKey, callback) {
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === targetKey.toLowerCase()) {
                e.preventDefault()
                if (callbackRef.current) {
                    callbackRef.current(e)
                }
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [targetKey])
}

export default useShortcut