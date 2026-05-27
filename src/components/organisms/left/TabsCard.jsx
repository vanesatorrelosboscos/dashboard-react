import { useState, useEffect } from "react"
import TabsCardHeader from "../../molecules/tabs/TabsCardHeader"
import TasksTab from "./TasksTab"
import TeamTab from "./TeamTab"
import ActivityTab from "./ActivityTab"
import FormTab from "./FormTab"
import Card from "../../molecules/card/Card"
import CardBody from "../../molecules/card/CardBody"

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