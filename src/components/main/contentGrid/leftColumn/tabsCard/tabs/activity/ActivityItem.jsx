function ActivityItem({text, time, color}){
    return (
        <div className="activity-item">
            <div className="activity-dot" style={{ background: color }}></div>
            <div className="activity-body">
                <div className="activity-text" dangerouslySetInnerHTML={{ __html: text }} />
                <div className="activity-time">{time}</div>
            </div>
        </div>
    )
}

export default ActivityItem