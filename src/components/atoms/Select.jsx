import InputError from "./input/InputError"

function Select({ label, id, options = [], value, onChange, hasError, isSuccess, errorMsg, placeholder }) {
    const baseSelectClass = "w-full p-2.5 rounded-[10px] border border-solid bg-[var(--surface2)] text-[var(--text)] text-sm outline-none -mb-2.5 transition-all duration-300 ease-in-out focus:border-[var(--primary)] appearance-none"

    const statusClass = hasError 
        ? 'border-[var(--danger)]' 
        : isSuccess 
            ? 'border-[var(--success)]' 
            : 'border-[var(--border)]'

    return (
        <div className="mb-4 relative">
            {label && <label className="block text-[13px] font-semibold" htmlFor={id}>{label}</label>}
            <div>
                <select 
                    className={`${baseSelectClass} ${statusClass}`} 
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
                {isSuccess && <span className="absolute right-3.5 top-8.25 text-sm">✅</span>}
            </div>
            {hasError && (
                <InputError 
                    msg={errorMsg} 
                    className="text-[11px] relative left-0.75 mt-2.5 -mb-2.5" 
                />
            )}
        </div>
    )
}

export default Select