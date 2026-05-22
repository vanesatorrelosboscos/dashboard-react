import { useState, useEffect } from "react"
import TabsCardHeader from "./TabsCardHeader"
import TasksTab from "./tabs/tasks/TasksTab"
import TeamTab from "./tabs/team/TeamTab"
import ActivityTab from "./tabs/activity/ActivityTab"
import FormTab from "./tabs/form/FormTab"
import Card from "../../../../ui/card/Card"
import CardBody from "../../../../ui/card/CardBody"

function TabsCard() {
    const [activeTab, setActiveTab] = useState("tasks")

    const [toDoList, setToDoList] = useState(() => {
        const savedTodos = localStorage.getItem("my_todo_list")
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem("my_todo_list", JSON.stringify(toDoList))
    }, [toDoList])

    return (
        <Card>
            <TabsCardHeader activeTab={activeTab} onTabChange={setActiveTab} />
            <CardBody>
                <TasksTab 
                    isTabActive={activeTab === "tasks"} 
                    toDoList={toDoList} 
                    setToDoList={setToDoList} 
                />
                
                <TeamTab 
                    isTabActive={activeTab === "team"} 
                />
                
                <ActivityTab 
                    isTabActive={activeTab === "activity"} 
                />
                
                <FormTab 
                    isTabActive={activeTab === "form"} 
                />
            </CardBody>
        </Card>
    )
}

export default TabsCard