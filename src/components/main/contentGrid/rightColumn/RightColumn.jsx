import FocusTimer from "./focusTimer/FocusTimer"
import ProjectProgress from "./projectProgress/ProjectProgress"
import SprintPriorities from "./sprintPriorities/SprintPriorities"

function RightColumn({ sprintTasks }) {
    return (
        <div className="right-col">
            <FocusTimer />
            <SprintPriorities sprintTasks = { sprintTasks }/>
            <ProjectProgress />
        </div>
    )
}

export default RightColumn