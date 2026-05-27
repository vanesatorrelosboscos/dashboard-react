import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

function ContentGrid({ sprintTasks, setSprintTasks}) {
  return (
    <div className="content-grid">
      <LeftColumn />
      <RightColumn sprintTasks = {sprintTasks} setSprintTasks={setSprintTasks}/>
    </div>
  )
}

export default ContentGrid