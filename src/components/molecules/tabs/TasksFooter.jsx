function TasksFooter({ remaining }) {
    return (
        <div className="todo-footer">
            <span id="todoCount">{remaining} tasks remaining</span>
            <span className="kbd-hint"><span className="kbd">Ctrl+M</span> new task</span>
        </div>
    );
}

export default TasksFooter