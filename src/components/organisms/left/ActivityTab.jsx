import activities from "../../../constants/activities"
import ActivityItem from "../../molecules/tabs/ActivityItem"

function ActivityTab({isTabActive}) {
    return (
        <div className={`tab-panel ${isTabActive ? 'active' : ''}`} id="tab-activity">
            <div className="activity-list" id="activityFeed">
                {activities.map(ac => (
                    <ActivityItem
                        key = {crypto.randomUUID()}
                        text = {ac.text}
                        time = {ac.time}
                        color = {ac.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default ActivityTab