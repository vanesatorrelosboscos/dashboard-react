import Card from "../../../../ui/Card"
import CardBody from "../../../../ui/CardBody"
import CardHeader from "../../../../ui/CardHeader"
import DragPriority from "./DragPriority"
import useDragReorder from "../../../../../hooks/useDragReorder"

function SprintPriorities({ sprintTasks, setSprintTasks}){
    const handleDrop = useDragReorder(sprintTasks, setSprintTasks, 'custom/sprint-id')

    return (
        <Card>
            <CardHeader 
                title = "🎯 Sprint Priorities"
                style = "drag-text"
                text = "Drag to reorder"
            />
            <CardBody>
                <div className="drag-list" id="dragList">
                    {sprintTasks.map(item => (
                        <DragPriority 
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            tag={item.tag}
                            priority={item.priority}
                            onDrop={(e) => handleDrop(e, item.id)}
                        />
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default SprintPriorities