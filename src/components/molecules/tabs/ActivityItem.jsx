function ActivityItem({ text, time, color }) {
    return (
        <div className="flex gap-3 p-3 border-b border-solid border-(--border) last:border-b-0">
            <div 
                className="size-2 rounded-full mt-1.5 shrink-0" 
                style={{ backgroundColor: color }} 
            />
            <div>
                <div className="text-[13px]" dangerouslySetInnerHTML={{ __html: text }} />
                <div className="text-[11px] text-(--muted) mt-0.5">{time}</div>
            </div>
        </div>
    )
}

export default ActivityItem