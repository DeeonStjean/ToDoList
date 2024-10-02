import { useState } from "react"

export default function Tasks(props) {
    const [editing, setEditing] = useState(false)
    const [newTask, setNewTask] = useState(props.task)
    
    const handleEditSubmit = () => {
        props.onEdit(props.id, newTask)
        setEditing(false)
    }
    
    
    return (
        <div className="item">
            <input type="checkbox" name="task" checked={props.completed} onChange={() => props.onToggleComplete(props.id)}/>
            {editing ? (<><input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/><button onClick={handleEditSubmit}>Save</button></>) : (<div className="task">{props.task}</div>)}
            <button onClick={() => setEditing(true)}> edit</button>
            <button disabled={!props.completed} onClick={() => props.onDelete(props.id)}>delete</button>
        </div>
    )
}