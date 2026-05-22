function FormInput({ label, type, id, placeholder, value, onChange, hasError, isSuccess, errorMsg }) {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <div className="field-wrap">
                <input 
                    className={`form-input ${hasError ? 'invalid' : isSuccess ? 'valid' : ''}`} 
                    type={type} 
                    id={id} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                />
                <span className="form-success-icon" style={{ display: isSuccess ? 'block' : 'none' }}>
                    ✅
                </span>
            </div>
            <div className="form-error" style={{ display: hasError ? 'block' : 'none' }}>
                {errorMsg}
            </div>
        </div>
    );
}

export default FormInput;