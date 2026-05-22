import cardHeaderButtons from "./cardHeaderButtons"
import TabsBtn from "./TabsBtn"

function CardHeader({ activeTab, onTabChange }) {
    return (
        <div className="card-header">
            <div className="tabs" id="mainTabs">
                {cardHeaderButtons.map((button) => (
                    <TabsBtn
                        key={crypto.randomUUID()}
                        tab={button.tab}
                        isActive={button.tab === activeTab}
                        icon={button.icon}
                        label={button.label}
                        onClick={onTabChange}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardHeader