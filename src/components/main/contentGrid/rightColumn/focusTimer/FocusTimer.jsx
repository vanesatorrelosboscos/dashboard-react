import CardHeader from "../../../../ui/card/CardHeader"
import Card from "../../../../ui/card/Card"
import CardBody from "../../../../ui/card/CardBody"
import Button from "../../../../ui/Button"
import useFocusTimer from "../../../../../hooks/useFocusTimer"

function FocusTimer() {
    const timerButtons = [5, 15, 25, 60]
    
    const {
        formattedTime,
        badgeText,
        badgeType,
        startBtnText,
        handleStartPause,
        handleReset,
        handlePresetClick
    } = useFocusTimer()

    return (
        <Card>
            <CardHeader
                title="⏱ Focus Timer"
                badge={badgeType}
                id="timerStatus"
                text={badgeText}
            />
            
            <CardBody>
                <div className="timer-display">
                    <div className="timer-digits" id="timerDisplay">
                        {formattedTime}
                    </div>
                </div>
                
                <div className="timer-preset-row">
                    {timerButtons.map(btn => (
                        <Button 
                            key={btn}
                            variant="preset"
                            onClick={() => handlePresetClick(btn)}
                            text={`${btn}m`}
                        />
                    ))}
                </div>
                
                <div className="timer-controls">
                    <Button 
                        variant="primary"
                        text={startBtnText}
                        onClick={handleStartPause}
                    />
                    <Button 
                        variant="outline"
                        text="↺ Reset"
                        onClick={handleReset}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default FocusTimer