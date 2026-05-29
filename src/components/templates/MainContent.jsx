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
        <main className="col-start-2 row-start-2 flex flex-col p-7 gap-7 max-[1024px]:p-5 max-[1024px]:gap-5 max-[670px]:col-span-full max-[670px]:p-4">
            <Header onAddTask={handleAddTask} />
            <KpiGrid />
            <ContentGrid sprintTasks={sprintTasks} setSprintTasks={setSprintTasks} />
        </main>
    )
}

export default MainContent