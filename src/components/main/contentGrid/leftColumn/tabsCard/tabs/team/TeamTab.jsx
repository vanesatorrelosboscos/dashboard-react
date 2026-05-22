import teamData from './teamData'
import MemberCard from './MemberCard'
import {useState} from 'react'

function TeamTab({isTabActive}) {
    const [searchMember, setSearchMember] = useState('')

    const filteredTeam = teamData.filter(member => 
        member.name.toLowerCase().includes(searchMember.toLowerCase()) ||
        member.role.toLowerCase().includes(searchMember.toLowerCase())
    )

    return (
        <div className={`tab-panel ${isTabActive ? 'active' : ''}`} id="tab-team">
            <input 
                type="text" 
                id="teamSearch" 
                autoComplete="off" 
                placeholder="🔍 Search team members…" 
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
            />
            <div className="team-grid" id="teamGrid">
                {filteredTeam.map(member => (
                    <MemberCard
                        key={crypto.randomUUID()}
                        name={member.name}
                        role={member.role}
                        status={member.status}
                        color={member.color}
                    />
                ))}
            </div>
            {filteredTeam.length === 0 && (
                <div className="no-results" id="teamNoResults">😕 No team members found.</div>
            )}
        </div>
    )
}

export default TeamTab