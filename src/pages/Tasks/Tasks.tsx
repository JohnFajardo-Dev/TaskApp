import React, { useState } from 'react';
import "./Tasks.css";
import TaskList from '../../modules/TaskList/TaskList';

function getTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem('tasks');
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
