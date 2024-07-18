import React from 'react'


import useState from "react";

function AddTaskForm() {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(newTaskName.trim()){
            const tasks = getTaskFromLocalStorage();
            const newTaskId = tasks.legth ? Math.max(...tasks.map((task)=>task.id)) + 1 : 1;
            const newTask = {id:newTaskId, Name: newTaskName, completed:false}
            tasks.push(newTask)
            setTasks(tasks)
            setNewTaskName('')
            localStorage.setItem('tasks', JSON.stringify(tasks))

        }
    }



  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={newTaskName} onChange={(event)=> setNewTaskName(event.target.value)} placeholder="Add Task"/>
        <button type="submit"></button>
    </form>
  )
}

export default AddTaskForm