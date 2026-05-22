import Card from "../../../../ui/Card"
import CardBody from "../../../../ui/CardBody"
import CardHeader from "../../../../ui/CardHeader"
import DragPriority from "./DragPriority"

function SprintPriorities({ sprintTasks }){

    return (
        <Card>
            <CardHeader 
                title = "🎯 Sprint Priorities"
                style = "drag-text"
                text = "Drag to reorder"
            />
            <CardBody>
                <div className="drag-list" id="dragList">
                    {sprintTasks.map(item =>(
                        <DragPriority 
                            key = {crypto.randomUUID()}
                            text = {item.text}
                            tag = {item.tag}
                            priority = {item.priority}
                        />
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default SprintPriorities