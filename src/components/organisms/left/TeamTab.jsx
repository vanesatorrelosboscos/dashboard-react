import teamData from "../../../constants/teamData"
import MemberCard from '../../molecules/tabs/MemberCard'
import {useState} from 'react'
import Input from "../../atoms/input/Input"

function TeamTab({isTabActive}) {
    const [searchMember, setSearchMember] = useState('')

    const filteredTeam = teamData.filter(member => 
        member.name.toLowerCase().includes(searchMember.toLowerCase()) ||
        member.role.toLowerCase().includes(searchMember.toLowerCase())
    )

    return (
        <div className={isTabActive ? 'block' : 'hidden'}>
            <Input 
                id="teamSearch"
                placeholder="🔍 Search team members…"
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                className="w-full bg-(--surface2) border border-solid border-(--border) rounded-[10px] px-3.5 py-2.25 text-(--text) text-sm outline-none mb-3.5 font-[inherit]"
            />
            <div className="grid grid-cols-2 gap-2.5 max-[500px]:grid-cols-1">
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
                <div className="text-center text-(--muted) text-sm pt-4 pb-2.75">
                    😕 No team members found.
                </div>
            )}
        </div>
    )
}

export default TeamTab