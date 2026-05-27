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
        <div className="progress-item">
            <label>
                {name}<span>{pct}%</span>
            </label>
            <div className="progress-track">
                <div 
                    className="progress-fill" 
                    style={{ 
                        background: color,
                        width: `${currentWidth}%`, 
                    }} 
                    data-pct={pct}
                ></div>
            </div>
        </div>
    );
}

export default ProgressItem
