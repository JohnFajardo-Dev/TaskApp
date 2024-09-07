// CSS
import "./Tasks.css";
// Librarys
import React, { useState } from 'react';
// Components
import TaskList from '../../modules/TaskList/TaskList';


// receives tasks from localstorage
function getTasksFromLocalStorage() {
  // Save tasks in tasksJSON const from localStorage
  const tasksJSON = localStorage.getItem('tasks');
  // if is empty create and return
  if (!tasksJSON) return [];
  return JSON.parse(tasksJSON);
}

export default function Tasks() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  return (
    <section className='tasks-full-cont'>
        <h2>Tasks</h2>
      <section className='tasks-cont'>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </section>
    </section>
  );
}
