import { useState, useEffect } from 'react'

function ProgressItem({ name, pct, color }) {
    const [currentWidth, setCurrentWidth] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentWidth(pct)
        }, 300)

        return () => clearTimeout(timer)
    }, [pct])

    return (
        <div>
            <label className="flex justify-between text-[13px] font-medium">
                {name}<span className="text-(--muted)">{pct}%</span>
            </label>
            <div className="mt-0.5 bg-(--surface2) h-2 rounded-full">
                <div 
                    className="h-full rounded-full [transition:width_1.5s_cubic-bezier(0.4,0,0.2,1)]" 
                    style={{ 
                        background: color,
                        width: `${currentWidth}%`, 
                    }} 
                    data-pct={pct}
                ></div>
            </div>
        </div>
    )
}

export default ProgressItem