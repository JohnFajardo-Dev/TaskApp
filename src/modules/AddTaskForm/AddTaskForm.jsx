import React, { useState } from 'react';

import "./AddTaskForm.css"

function AddTaskForm({ setTasks, tasks }) {
  const [newTaskName, setNewTaskName] = useState('');
  const [taskColor, setTaskColor] = useState('yellow'); // Estado para el color de la tarea

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskName.trim()) {
      const newTaskId = tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
      const newTask = { id: newTaskId, name: newTaskName, color: taskColor };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setNewTaskName(''); // Limpiar el campo de texto después de agregar la tarea
      setTaskColor('yellow'); // Reiniciar el color al valor por defecto (opcional)
    }
  };

  return (
    <form className='add-task-form' onSubmit={handleSubmit}>
      <h2>Add your Task</h2>
      <input
        type="text"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
        placeholder="Add Task"
      />
      <select
        value={taskColor}
        onChange={(event) => setTaskColor(event.target.value)}
      >
        <option value="yellow">Yellow</option>
        <option value="black-blue">Black Blue</option>
        <option value="white-blue">White Blue</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
