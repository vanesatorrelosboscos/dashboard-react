function FormSelect({label, id, options, value, onChange, hasError, isSuccess, errorMsg}){
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <div className="field-wrap">
                <select 
                    className={`form-input ${hasError ? 'invalid' : isSuccess ? 'valid' : ''}`} 
                    id={id}
                    value={value}
                    onChange={onChange}
                >
                    <option value="">Select department…</option>
                    {options.map(optionText => (
                        <option key={crypto.randomUUID()} value={optionText}>
                            {optionText}
                        </option>
                    ))}
                </select>
                <span 
                    className="form-success-icon" 
                    style={{ display: isSuccess ? 'block' : 'none' }}>
                    ✅
                </span>
            </div>
            <div 
                className="form-error" 
                style={{ display: hasError ? 'block' : 'none' }}>
                {errorMsg}
            </div>
        </div>
    )
}

export default FormSelect