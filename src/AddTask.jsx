import { useState } from "react";

export default function AddTask(props) {
    const [task, setTask] = useState("");
    
    const AddItem = () => {
        props.onAdd(task)
        setTask("")
    }
    return (
        <div className="item">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={AddItem}>add</button>
        </div>
    );
}