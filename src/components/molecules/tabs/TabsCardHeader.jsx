import tabsCardHeaderButtons from "../../../constants/tabsCardHeaderButtons"
import Button from "../../atoms/Button"

function TabsCardHeader({ activeTab, onTabChange }) {
    return (
        <div className="flex justify-between items-center pt-4.5 px-5.5 pb-3.5 border-b border-solid border-(--border)">
            <div className="flex gap-1 p-1 bg-(--surface2) rounded-(--radius)">
                {tabsCardHeaderButtons.map(button => (
                    <Button
                        key={button.tab}
                        variant="tab"
                        isActive={button.tab === activeTab}
                        onClick={() => onTabChange(button.tab)} 
                        text={button.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default TabsCardHeader