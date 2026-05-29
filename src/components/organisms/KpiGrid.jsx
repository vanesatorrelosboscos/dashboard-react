import KpiCard from "../molecules/KpiCard"
import kpiData from "../../constants/kpiData"

function KpiGrid() {
  return (
    <div className="grid grid-cols-4 gap-4.5 w-full max-[1024px]:grid-cols-2 max-[510px]:grid-cols-1">
      {kpiData.map((kpi) => (
        <KpiCard
          key={crypto.randomUUID()}
          icon={kpi.icon}
          label={kpi.label}
          target={kpi.target}
          prefix={kpi.prefix}
          suffix={kpi.suffix}
          change={kpi.change}
          changeClass={kpi.changeClass}
          theme={kpi.theme}
        />
      ))}
    </div>
  )
}

export default KpiGrid