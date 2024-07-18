import React, { useState } from 'react';
import "./Tasks.css";
import NavBar from '../../modules/NavBar/NavBar';
import TaskList from '../../modules/TaskList/TaskList';
import AddTaskForm from '../../modules/AddTaskForm/AddTaskForm';

function getTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem('tasks');
  if (!tasksJSON) return [];
  return JSON.parse(tasksJSON);
}

export default function Tasks() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  return (
    <main>
      <NavBar />
      <section className='tasks-cont'>
        <TaskList tasks={tasks} setTasks={setTasks} />
        <AddTaskForm setTasks={setTasks} tasks={tasks} />
      </section>
    </main>
  );
}
