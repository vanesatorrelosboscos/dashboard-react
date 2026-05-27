import { useState, useEffect, useRef } from 'react'

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

    const inputElement = (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="off"
            ref={inputRef}
            className={`${label ? 'form-input' : ''} ${className} ${showError ? 'invalid' : isSuccess ? 'valid' : ''}`}
        />
    )

    if (!label) return inputElement 

    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">{label}</label>
            
            <div className="field-wrap">
                {inputElement}
                {isSuccess && <span className="form-success-icon">✅</span>}
            </div>
            
            {showError && <div className="form-error">{errorMsg}</div>}
        </div>
    )
}

export default Input