import CardHeader from "../../molecules/card/CardHeader"
import Card from "../../molecules/card/Card"
import CardBody from "../../molecules/card/CardBody"
import Button from "../../atoms/Button"
import useFocusTimer from "../../../hooks/useFocusTimer"

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
                text={badgeText}
            />
            
            <CardBody>
                <div className="text-center text-[56px] tracking-[-2px] font-extrabold text-(--primary)">
                    {formattedTime}
                </div>
                
                <div className="flex gap-2 justify-center mt-2.5">
                    {timerButtons.map(btn => (
                        <Button 
                            key={btn}
                            variant="preset"
                            onClick={() => handlePresetClick(btn)}
                            text={`${btn}m`}
                        />
                    ))}
                </div>
                
                <div className="flex gap-2 justify-center mt-2.5">
                    <Button 
                        variant="primary"
                        text={startBtnText}
                        onClick={handleStartPause}
                        className="w-28.75 h-8.75 text-sm! justify-center items-center"
                    />
                    <Button 
                        variant="outline"
                        text="↺ Reset"
                        onClick={handleReset}
                        className="w-28.75 h-8.75 text-sm! justify-center items-center"
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default FocusTimer