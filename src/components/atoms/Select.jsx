function Select({ label, id, options = [], value, onChange, hasError, isSuccess, errorMsg, placeholder }) {
    return (
        <div className="form-group">
            {label && <label className="form-label" htmlFor={id}>{label}</label>}
            <div className="field-wrap">
                <select 
                    className={`form-input ${hasError ? 'invalid' : isSuccess ? 'valid' : ''}`.trim()} 
                    id={id}
                    value={value}
                    onChange={onChange}
                >
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map(opt => {
                        const isObject = typeof opt === 'object' && opt !== null
                        const optValue = isObject ? opt.value : opt
                        const optLabel = isObject ? opt.label : opt

                        return (
                            <option key={optValue} value={optValue}>
                                {optLabel}
                            </option>
                        )
                    })}
                </select>
                {isSuccess && <span className="form-success-icon">✅</span>}
            </div>
            {hasError && <div className="form-error">{errorMsg}</div>}
        </div>
    )
}

export default Select