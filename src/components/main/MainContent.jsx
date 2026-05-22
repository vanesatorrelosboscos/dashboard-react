import Header from "./header/Header"
import KpiGrid from "./kpi/KpiGrid"
import ContentGrid from "./contentGrid/ContentGrid"
import initialDragItems from "./contentGrid/rightColumn/sprintPriorities/dragItems"
import {useState} from "react"

function MainContent() {
    const [sprintTasks, setSprintTasks] = useState(initialDragItems)

    const handleAddTask = (newTask) => {
        setSprintTasks([...sprintTasks, newTask])
    }
    
    return (
        <main className="main">
            <Header onAddTask={handleAddTask} />
            <KpiGrid />
            <ContentGrid sprintTasks={sprintTasks} setSprintTasks={setSprintTasks} />
        </main>
    )
}

export default MainContent