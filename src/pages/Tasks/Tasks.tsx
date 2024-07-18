import React from 'react'
import "./Tasks.css"
import NavBar from '../../modules/NavBar/NavBar'

import TaskList from '../../modules/TaskList/TaskList'
import AddTaskForm from '../../modules/AddTaskForm/AddTaskForm'

function Tasks() {
const tasks = [
  { id: 1, color:'yellow', name: 'Tarea 1', date:"7:00 AM"},

  { id: 2, color:'black-blue', name: 'Tarea 2', date:"7:00 AM"},
];

localStorage.setItem('tasks', JSON.stringify(tasks));


  return (
    <main>
        <NavBar/>
        <section className='tasks-cont'>
          <TaskList>
          <AddTaskForm  >
        </section>
    </main>
  )
}

export default Tasks