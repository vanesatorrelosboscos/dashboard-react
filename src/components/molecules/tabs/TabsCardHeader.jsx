import tabsCardHeaderButtons from "../../../constants/tabsCardHeaderButtons"
import Button from "../../atoms/Button"

function TabsCardHeader({ activeTab, onTabChange }) {
    return (
        <div className="card-header">
            <div className="tabs" id="mainTabs">
                {tabsCardHeaderButtons.map(button => (
                    <Button
                        key={button.tab}
                        variant="tab"
                        className={button.tab === activeTab ? 'active' : ''}
                        onClick={() => onTabChange(button.tab)} 
                        text={button.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default TabsCardHeader