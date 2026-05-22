import { useState, useEffect } from "react"
import CardHeader from "./CardHeader"
import TasksTab from "./tabs/tasks/TasksTab"
import TeamTab from "./tabs/team/TeamTab"
import ActivityTab from "./tabs/activity/ActivityTab"
import FormTab from "./tabs/form/FormTab"

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
        <div className="card">
            <CardHeader activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="card-body">
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
            </div>
        </div>
    )
}

export default TabsCard