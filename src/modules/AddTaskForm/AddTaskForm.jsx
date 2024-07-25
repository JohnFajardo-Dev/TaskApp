import React, { useState } from "react";

import "./AddTaskForm.css";

function AddTaskForm({ setTasks, tasks }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [taskColor, setTaskColor] = useState(""); // Estado para el color de la tarea

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskName.trim()) {
      const newTaskId = tasks.length
        ? Math.max(...tasks.map((task) => task.id)) + 1
        : 1;
      const newTask = {
        id: newTaskId,
        name: newTaskName,
        color: taskColor,
        date: newDate,
        time: newTime,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTaskName(""); // Limpiar el campo de texto después de agregar la tarea
      setTaskColor(""); // Reiniciar el color al valor por defecto (opcional)
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add your Task</h2>
      <div>
        <label htmlFor="">Task Title</label>
        <input
          type="text"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <label htmlFor="">Task Date</label>
        <input
          type="date"
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
          placeholder="Date"
          name="date-input"
          required
        />
      </div>
      <div>
        <label htmlFor="">Task Time</label>
        <input
          type="time"
          onChange={(event) => setNewTime(event.target.value)}
          placeholder={"Time"}
          value={newTime}
          required
        />
      </div>
      <div>
        <label htmlFor="">Color Target Task</label>
        <select
          value={taskColor}
          onChange={(event) => setTaskColor(event.target.value)}
          required
        >
          <option value="black-blue">Black Blue</option>
          <option value="white-blue">White Blue</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
