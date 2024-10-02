import { useReducer, useState } from "react";
import AddTask from "./AddTask.jsx";
import Tasks from "./Tasks.jsx";


let Id =3;
function reduceData(state, action) {
  switch (action.type) {
    
    case 'add': {
      return [...state, { id: Id++, task: action.payload, completed: false }]  
    }
    case 'delete': {
      return state.filter(item => item.id !== action.payload)
    } 
    case 'toggleComplete': {
      return state.map(item => 
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    }
    case 'edit': {
      return state.map(item =>
        item.id === action.payload.id ? { ...item, task: action.payload.newTask } : item
      );
    }    
    default:
      return state;
  }
}


export default function App() {
  const [items, dispatch] = useReducer(reduceData, initialState);

  const AddItem=(task) => dispatch({ type: 'add', payload: task} );

  const DeleteItem = id => dispatch({ type: 'delete', payload: id });
  const handleToggleComplete = id => dispatch({ type: 'toggleComplete', payload: id });
  const EditItem = (id, task) => dispatch({ type: 'edit', payload: {id, task} })
  
  return (
    <div className="main">
      <h1>To Do List</h1>
      {items.map((item) => 
        <Tasks 
          key={item.id} 
          {...item} 
          onDelete={DeleteItem}
          onToggleComplete={handleToggleComplete}
          onEdit = {EditItem}
        />)}
      <AddTask onAdd={AddItem} />
    </div>
  )
}

const initialState = [
  {
    "id": 1,
    "task": "Study for KBA",
    "completed": true
  },
  {
    "id": 2,
    "task": "do quiz",
    "completed": false
  },
  {
    "id": 3,
    "task": "do homework",
    "completed": false
  },
];