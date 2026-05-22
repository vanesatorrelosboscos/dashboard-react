import TabsCard from "./tabsCard/TabsCard"
import RevenueChart from "./revenueChart/RevenueChart"

function LeftColumn() {
    return (
        <div className="left-column">
            <TabsCard />
            <RevenueChart />
        </div>
    )
}

export default LeftColumn