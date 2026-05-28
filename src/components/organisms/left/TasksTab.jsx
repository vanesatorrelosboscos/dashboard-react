import Button from "../../atoms/Button"
import AddToDo from "../../molecules/tabs/AddToDo"
import ToDoTask from "../../molecules/tabs/ToDoTask"
import TasksFooter from "../../molecules/tabs/TasksFooter"
import { useState } from "react"
import useDragReorder from "../../../hooks/useDragReorder"

function TasksTab({ toDoList, setToDoList, isTabActive }) {
    function addTask(text) {
        if (text.trim() === "") return

        const newTask = {
            id: self.crypto.randomUUID(),
            text,
            completed: false
        }
        setToDoList([newTask, ...toDoList ])
    }

    function toggleTaskCompletion(id) {
        setToDoList(toDoList.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    function deleteTask(id) {
        setToDoList(toDoList.filter(task => task.id !== id))
    }

    const handleDrop = useDragReorder(toDoList, setToDoList, 'custom/todo-id')

    const remainingTasks = toDoList.filter(task => !task.completed).length
    const [currentFilter, setCurrentFilter] = useState("all")

    const filterButtons = [
        { filter: "all", label: "All" },
        { filter: "active", label: "Active" },
        { filter: "completed", label: "Done" }
    ]

    const filteredTasks = toDoList.filter(task => {
        if (currentFilter === "active")  return !task.completed
        if (currentFilter === "completed") return task.completed
    
        return true
    })


    return (
        <div className={`tab-panel ${isTabActive ? 'active' : ''}`} id="tab-tasks">
            <AddToDo onAdd={addTask} />
            <div className="todo-filters">
                {filterButtons.map(btn => (
                    <Button 
                        key={btn.filter}
                        variant="filter"
                        isActive={currentFilter === btn.filter}
                        onClick={() => setCurrentFilter(btn.filter)} 
                        text={btn.label}
                    />
                ))}
            </div>
            <div className="todo-list" id="todoList">
                {filteredTasks.map(task => (
                    <ToDoTask 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        done={task.completed}
                        onToggle={toggleTaskCompletion}
                        onDelete={deleteTask}
                        onDrop={(e) => handleDrop(e, task.id)}
                    />
                ))}
            </div>
            <TasksFooter remaining={remainingTasks} />
        </div>
    )
}

export default TasksTab