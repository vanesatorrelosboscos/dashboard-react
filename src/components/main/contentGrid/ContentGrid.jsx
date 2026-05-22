import LeftColumn from "./leftColumn/LeftColumn"
import RightColumn from "./rightColumn/RightColumn"

function ContentGrid({ sprintTasks, setSprintTasks}) {
  return (
    <div className="content-grid">
      <LeftColumn />
      <RightColumn sprintTasks = {sprintTasks} setSprintTasks={setSprintTasks}/>
    </div>
  )
}

export default ContentGrid