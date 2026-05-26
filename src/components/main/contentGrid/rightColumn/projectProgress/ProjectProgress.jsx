import Card from "../../../../ui/card/Card"
import CardBody from "../../../../ui/card/CardBody"
import CardHeader from "../../../../ui/card/CardHeader"
import ProgressItem from "./ProgressItem"
import projects from "./projects"

function ProjectProgress(){
    return(
        <Card>
            <CardHeader 
                title = "📈 Project Progress"
                className = "badge badge-warning"
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