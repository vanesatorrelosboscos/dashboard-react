import activities from "../../../constants/activities"
import ActivityItem from "../../molecules/tabs/ActivityItem"

function ActivityTab({isTabActive}) {
    return (
        <div className={isTabActive ? 'block' : 'hidden'}>
            <div>
                {activities.map(ac => (
                    <ActivityItem
                        key={crypto.randomUUID()}
                        text={ac.text}
                        time={ac.time}
                        color={ac.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default ActivityTab