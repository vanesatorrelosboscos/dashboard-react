function InputError({ msg, className=""}) {
    return (
        <div className={`text-(--danger) text-xs -mt-2.5 mb-2 ${className}`}>{msg}</div>
    )
}

export default InputError