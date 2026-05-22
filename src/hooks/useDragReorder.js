import { useCallback } from 'react'

function useDragReorder(list, setList, dragDataType) {
    const handleDrop = useCallback((e, targetId) => {
        e.preventDefault()
        e.currentTarget.classList.remove('drag-over')

        const draggedId = e.dataTransfer.getData(dragDataType)
        
        if (!draggedId || draggedId === targetId) return

        const oldIndex = list.findIndex(item => item.id === draggedId)
        const newIndex = list.findIndex(item => item.id === targetId)

        if (oldIndex === -1 || newIndex === -1) return

        const newList = [...list]
        const [movedItem] = newList.splice(oldIndex, 1)
        newList.splice(newIndex, 0, movedItem)

        setList(newList)
        
    }, [list, setList, dragDataType])

    return handleDrop
}

export default useDragReorder