import TabsCard from "../organisms/left/TabsCard"
import RevenueChart from "../organisms/left/RevenueChart"

function LeftColumn() {
    return (
        <div className="flex flex-col gap-5.5">
            <TabsCard />
            <RevenueChart />
        </div>
    )
}

export default LeftColumn