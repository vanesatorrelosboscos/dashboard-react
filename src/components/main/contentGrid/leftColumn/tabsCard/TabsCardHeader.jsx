import tabsCardHeaderButtons from "./tabsCardHeaderButtons"
import TabsBtn from "./TabsBtn"

function TabsCardHeader({ activeTab, onTabChange }) {
    return (
        <div className="card-header">
            <div className="tabs" id="mainTabs">
                {tabsCardHeaderButtons.map((button) => (
                    <TabsBtn
                        key={`${button.tab}-tab`}
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

export default TabsCardHeader