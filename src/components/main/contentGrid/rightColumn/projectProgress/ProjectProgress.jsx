import Card from "../../../../ui/Card"
import CardBody from "../../../../ui/CardBody"
import CardHeader from "../../../../ui/CardHeader"
import ProgressItem from "./ProgressItem"
import projects from "./projects"

function ProjectProgress(){
    return(
        <Card>
            <CardHeader 
                title = "📈 Project Progress"
                style = "badge badge-warning"
                text = "Q1 2026"
            />
            <CardBody>
                <div className="progress-list" id="progressList">
                    {projects.map(p => (
                        <ProgressItem 
                            key = {crypto.randomUUID()}
                            name = {p.name}
                            pct = {p.pct}
                            color = {p.color}
                        />
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default ProjectProgress