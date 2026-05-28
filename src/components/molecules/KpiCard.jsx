import { useEffect, useRef, useState } from 'react'

function KpiCard({ icon, label, target, prefix = '', suffix = '', change, changeClass, theme }) {
  const [currentValue, setCurrentValue] = useState(0)
  const valueRef = useRef(null)

  useEffect(() => {
    let startTimestamp = null
    const duration = 1800

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const timeProgress = Math.min((timestamp - startTimestamp) / duration, 1)
      const current = Math.floor(timeProgress * target)
      
      setCurrentValue(current)

      if (timeProgress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCurrentValue(target)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(step)
          observer.unobserve(entry.target)
        }
      })
    })

    if (valueRef.current) {
      observer.observe(valueRef.current)
    }

    return () => observer.disconnect()
  }, [target])

  const themeStyles = {
    'kpi-theme-primary': 'border-t-[3px] border-t-(--primary)',
    'kpi-theme-success': 'border-t-[3px] border-t-(--success)',
    'kpi-theme-accent': 'border-t-[3px] border-t-(--accent)',
    'kpi-theme-warning': 'border-t-[3px] border-t-(--warning)',
  }

  const valueColors = {
    'kpi-theme-primary': 'text-(--primary)',
    'kpi-theme-success': 'text-(--success)',
    'kpi-theme-accent': 'text-(--accent)',
    'kpi-theme-warning': 'text-(--warning)',
  }

  return (
    <div className={`relative flex flex-col p-5 bg-(--surface) rounded-(--radius) border border-solid border-(--border) shadow-theme h-32.5 overflow-hidden transition-(--transition) hover:-translate-y-0.75 ${themeStyles[theme] || ''}`}>
      <div className="absolute top-5 right-5 size-9 text-[36px] flex justify-center items-center opacity-15">
        {icon}
      </div>
      <div className="text-[12px] text-(--muted) uppercase font-semibold">
        {label}
      </div>
      <div ref={valueRef} className={`text-[36px] font-extrabold ${valueColors[theme] || ''}`}>
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className={`flex items-center text-[12px] font-semibold ${changeClass === 'down' ? 'text-(--danger)' : 'text-(--success)'}`}>
        {change}
      </div>
    </div>
  )
}

export default KpiCard