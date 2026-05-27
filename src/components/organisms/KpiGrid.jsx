import KpiCard from "../molecules/KpiCard"
import kpiData from "../../constants/kpiData"

function KpiGrid() {
  return (
    <div className="kpi-grid" id="kpiGrid">
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