import CardHeader from "../CardHeader"
import TimerBtn from "./TimerBtn"
import { useState, useEffect } from "react"
import { useToast } from "../../../../../context/ToastContext"
import Card from "../../../../ui/Card"

const TIMER_STATUS = {
    READY: 'READY',
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
}

function FocusTimer() {
    const showToast = useToast()
    const timerButtons = [5, 15, 25, 60]
    
    const [timerState, setTimerState] = useState(TIMER_STATUS.READY)
    const [initialSeconds, setInitialSeconds] = useState(1500)
    const [currentSeconds, setCurrentSeconds] = useState(1500)

    useEffect(() => {
        let interval = null

        if (timerState === TIMER_STATUS.RUNNING && currentSeconds > 0) {
            interval = setInterval(() => {
                setCurrentSeconds(prev => prev - 1)
            }, 1000)
        } 
        else if (currentSeconds === 0 && timerState === TIMER_STATUS.RUNNING) {
            setTimerState(TIMER_STATUS.READY);
            showToast('Focus session complete! Time for a break 🎯', 'success', 'Timer Done')
        }

        return () => clearInterval(interval)
    }, [timerState, currentSeconds])

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const handleStartPause = () => {
        if (currentSeconds === 0) {
            setCurrentSeconds(initialSeconds)
            showToast("Timer restarted", "info")
        }

        if (timerState !== TIMER_STATUS.RUNNING) {
            setTimerState(TIMER_STATUS.RUNNING)
        } else {
            setTimerState(TIMER_STATUS.PAUSED)
        }
    }

    const handleReset = () => {
        if (timerState !== TIMER_STATUS.RUNNING) {
            setCurrentSeconds(initialSeconds)
            setTimerState(TIMER_STATUS.READY)
            if (currentSeconds !== initialSeconds) {
                showToast("Timer reset", "info")
            }
        } else {
            showToast("Pause the timer to reset", "warning")
        }
    }

    const handlePresetClick = (minutes) => {
        if (timerState !== TIMER_STATUS.RUNNING) {
            const seconds = minutes * 60
            setInitialSeconds(seconds)
            setCurrentSeconds(seconds)
            setTimerState(TIMER_STATUS.READY)
        } else {
            showToast("Pause the timer to select a new time", "warning")
        }
    };

    let badgeText = "Ready"
    let badgeType = "primary"
    let startBtnText = "▶ Start"

    if (timerState === TIMER_STATUS.RUNNING) {
        badgeText = "Running..."
        badgeType = "success"
        startBtnText = "⏸ Pause"
    } else if (timerState === TIMER_STATUS.PAUSED) {
        badgeText = "Paused"
        badgeType = "warning"
        startBtnText = "▶ Resume"
    } else if (timerState === TIMER_STATUS.READY && currentSeconds === 0) {
        badgeText = "Done!"
        badgeType = "success"
        startBtnText = "▶ Start"
    }

    return (
        <Card>
            <CardHeader
                title="⏱ Focus Timer"
                style={`badge badge-${badgeType}`}
                id="timerStatus"
                text={badgeText}
            />
            
            <div className="card-body">
                <div className="timer-display">
                    <div className="timer-digits" id="timerDisplay">
                        {formatTime(currentSeconds)}
                    </div>
                </div>
                
                <div className="timer-preset-row">
                    {timerButtons.map(btn => (
                        <TimerBtn 
                            key={btn}
                            time={btn} 
                            onClick={() => handlePresetClick(btn)}
                        />
                    ))}
                </div>
                
                <div className="timer-controls">
                    <button 
                        className="btn btn-primary btn-sm" 
                        onClick={handleStartPause}
                    >
                        {startBtnText}
                    </button>
                    <button 
                        className="btn btn-outline btn-sm" 
                        onClick={handleReset}
                    >
                        ↺ Reset
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default FocusTimer