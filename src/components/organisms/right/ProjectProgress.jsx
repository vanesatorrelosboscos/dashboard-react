import Card from "../../molecules/card/Card"
import CardBody from "../../molecules/card/CardBody"
import CardHeader from "../../molecules/card/CardHeader"
import ProgressItem from "../../molecules/ProgressItem"
import projects from "../../../constants/projects"

function ProjectProgress(){
    return(
        <Card>
            <CardHeader 
                title="📈 Project Progress"
                badge="warning"
                text="Q1 2026"
            />
            <CardBody>
                <div className="flex flex-col gap-3.5">
                    {projects.map(p => (
                        <ProgressItem 
                            key={crypto.randomUUID()}
                            name={p.name}
                            pct={p.pct}
                            color={p.color}
                        />
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default ProjectProgress