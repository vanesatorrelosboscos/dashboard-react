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
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(step)
          observer.unobserve(entry.target);
        }
      });
    });

    if (valueRef.current) {
      observer.observe(valueRef.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div className={`kpi-card ${theme}`}>
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-label">{label}</div>
      <div ref={valueRef} className="kpi-value">
        {prefix}
        {currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className={`kpi-change ${changeClass || ''}`}>{change}</div>
    </div>
  )
}

export default KpiCard