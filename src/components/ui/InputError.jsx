function InputError({ msg, className = "form-error"}) {
    return (
        <div className={className}>{msg}</div>
    )
}

export default InputError