import Header from "../organisms/Header"
import KpiGrid from "../organisms/KpiGrid"
import ContentGrid from "./ContentGrid"
import initialDragItems from "../../constants/dragItems"
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