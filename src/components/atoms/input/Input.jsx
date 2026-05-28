import { useState, useEffect, useRef } from 'react'
import InputError from './InputError'

function Input({ 
    id, 
    type = "text", 
    value = "", 
    onChange, 
    placeholder, 
    className = "", 
    label,
    required = false,
    pattern,
    errorMsg,
    submitCount = 0,
    inputRef
}) {
    const [showError, setShowError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const valueRef = useRef(value)
    valueRef.current = value

    useEffect(() => {
        if (submitCount > 0) {
            const currentVal = valueRef.current
            let err = false
            if (!pattern.test(currentVal)) err = true
            
            setShowError(err)
            setIsSuccess(!err)
        } else {
            setShowError(false)
            setIsSuccess(false)
        }
    }, [submitCount, required, pattern])

    const baseInputClass = "w-full p-2.5 rounded-[10px] border border-solid bg-[var(--surface2)] text-[var(--text)] text-sm outline-none -mb-2.5 transition-all duration-300 ease-in-out focus:border-[var(--primary)]"

    const statusClass = showError 
        ? 'border-[var(--danger)]' 
        : isSuccess 
            ? 'border-[var(--success)]' 
            : 'border-[var(--border)]'

    const inputElement = (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="off"
            ref={inputRef}
            className={`${label ? baseInputClass : ''} ${statusClass} ${className}`.trim()}
        />
    )

    if (!label) return inputElement 

    return (
        <div className="mb-4 relative">
            <label htmlFor={id} className="form-label">{label}</label>
            
            <div>
                {inputElement}
                {isSuccess && <span className="absolute right-3.5 top-8.25 text-sm">✅</span>}
            </div>
            
            {showError && <InputError msg={errorMsg} className="text-[11px] relative left-0.75 mt-2.5 -mb-2.5"/>}
        </div>
    )
}

export default Input