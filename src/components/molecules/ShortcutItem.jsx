function ShortCutsItem({ action, keys }) {
    return (
        <div className="flex justify-between items-center text-[12px] bg-(--surface2) rounded-(--radius) p-3">
            <span>{action}</span>
            <span>
                {keys.map((key, index) => (
                    <span 
                        key={index} 
                        className="bg-(--surface2) py-0.5 px-1.5 rounded-[4px] border border-solid border-(--border) text-(--muted) text-[11px] ml-1 inline-block"
                    >
                        {key}
                    </span>
                ))}
            </span>
        </div>
    )
}

export default ShortCutsItem