import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

function ContentGrid({ sprintTasks, setSprintTasks}) {
  return (
    <div className="grid grid-cols-[1fr_28vw] gap-5.5 w-full max-[892px]:grid-cols-1">
      <LeftColumn />
      <RightColumn sprintTasks={sprintTasks} setSprintTasks={setSprintTasks}/>
    </div>
  )
}

export default ContentGrid