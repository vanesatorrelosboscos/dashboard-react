function ShortCutsItem({action, keys}){
    return(
        <div className="shortcut-item">
            <span>{action}</span>
            <span className="shortcut-keys">
                {keys.map(key => (
                    <span key={crypto.randomUUID()} className="kbd">
                        {key}
                    </span>
                ))}
            </span>
        </div>
    )
}

export default ShortCutsItem