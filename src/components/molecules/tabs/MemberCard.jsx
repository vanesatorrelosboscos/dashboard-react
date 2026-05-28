const STATUS_COLORS = {
    online: "bg-(--success)",
    away: "bg-(--warning)"
}

function MemberCard({ name, role, status, color }) {
    const statusClass = STATUS_COLORS[status] || "bg-transparent"
    const initials = name.split(' ').map(w => w[0]).join('')

    return (
        <div className="bg-(--surface2) border border-solid border-(--border) rounded-[10px] p-6.25 flex flex-col items-center gap-2 select-none transition-all duration-300 ease-in-out hover:border-(--primary) hover:-translate-y-0.5">
            <div 
                className="size-10.5 rounded-full font-bold text-[15px] text-white flex items-center justify-center" 
                style={{ backgroundColor: color }}
            >
                {initials}
            </div>
            
            <div className="flex items-center gap-1.25">
                <div className="text-[13px] font-semibold">{name}</div>
                <div className={`size-2 rounded-full ${statusClass}`} title={status} />
            </div>
            
            <div className="text-[11px] text-(--muted)">{role}</div>
        </div>
    )
}

export default MemberCard