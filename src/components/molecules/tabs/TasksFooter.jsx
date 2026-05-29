function TasksFooter({ remaining }) {
    return (
        <div className="flex justify-between items-center mt-2 text-xs text-(--muted)">
            <span>{remaining} tasks remaining</span>
            <span><span className="bg-surface2 py-0.5 px-1.5 border border-(--border) rounded-[4px] text-muted text-[11px] ml-1">Ctrl+M</span> new task</span>
        </div>
    )
}

export default TasksFooter