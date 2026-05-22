import LeftColumn from "./leftColumn/LeftColumn"
import RightColumn from "./rightColumn/RightColumn"

function ContentGrid({ sprintTasks }) {
  return (
    <div className="content-grid">
      <LeftColumn />
      <RightColumn sprintTasks = {sprintTasks}/>
    </div>
  )
}

export default ContentGrid