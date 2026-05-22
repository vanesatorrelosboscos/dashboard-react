import FocusTimer from "./focusTimer/FocusTimer"
import ProjectProgress from "./projectProgress/ProjectProgress"
import SprintPriorities from "./sprintPriorities/SprintPriorities"

function RightColumn({ sprintTasks, setSprintTasks}) {
    return (
        <div className="right-col">
            <FocusTimer />
            <SprintPriorities sprintTasks = { sprintTasks } setSprintTasks={setSprintTasks}/>
            <ProjectProgress />
        </div>
    )
}

export default RightColumn