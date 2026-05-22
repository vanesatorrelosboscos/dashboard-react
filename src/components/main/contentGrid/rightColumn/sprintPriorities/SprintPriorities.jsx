import CardHeader from "../CardHeader"
import DragPriority from "./DragPriority"

function SprintPriorities({ sprintTasks }){

    return (
        <div className="card">
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
        </div>
    )
}

export default SprintPriorities