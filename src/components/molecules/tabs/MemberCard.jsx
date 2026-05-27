function MemberCard({ name, role, status, color }) {
    return (
        <div className="member-card">
            <div className="member-avatar" style={{ background: color }}>
                {name.split(' ').map(w => w[0]).join('')}
            </div>
            <div className="name-status">
                <div className="member-name">{name}</div>
                <div className={`member-status ${status}`} title={status}></div>
            </div>
            <div className="member-role">{role}</div>
        </div>
    )
}

export default MemberCard