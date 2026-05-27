import TabsCard from "../organisms/left/TabsCard"
import RevenueChart from "../organisms/left/RevenueChart"

function LeftColumn() {
    return (
        <div className="left-column">
            <TabsCard />
            <RevenueChart />
        </div>
    )
}

export default LeftColumn