import FocusTimer from "../organisms/right/FocusTimer"
import ProjectProgress from "../organisms/right/ProjectProgress"
import SprintPriorities from "../organisms/right/SprintPriorities"

function RightColumn({ sprintTasks, setSprintTasks}) {
    return (
        <div className="flex flex-col gap-5.5">
            <FocusTimer />
            <SprintPriorities sprintTasks = { sprintTasks } setSprintTasks={setSprintTasks}/>
            <ProjectProgress />
        </div>
    )
}

export default RightColumn