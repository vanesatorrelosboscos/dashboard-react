import Card from "../../../../ui/Card"
import CardHeader from "../CardHeader"
import DragPriority from "./DragPriority"

function SprintPriorities({ sprintTasks }){

    return (
        <Card>
            <CardHeader 
                title = "🎯 Sprint Priorities"
                style = "drag-text"
                text = "Drag to reorder"
            />
            <div className="card-body">
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
            </div>
        </Card>
    )
}

export default SprintPriorities