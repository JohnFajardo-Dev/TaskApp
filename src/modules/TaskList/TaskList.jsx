// Library
import React, { useEffect } from "react";
// CSS
import "./TaskList.css";

// TaskList
function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    // Save tasks from localStorage in storedTasks const
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  // Delete Task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <article className="day-target">
      {tasks.map((task) => (
        <article key={task.id} className={`task-card ${task.color}`}>
          <div className="task-cont">
            <div className="task-date-cont">
              <p className="task-date">{task.date}</p>
              <p className="task-date">{task.time}</p>
            </div>
            <h3 className="task-name">{task.name}</h3>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="task-btn"
            >
              <h3>Delete</h3>
            </button>
          </div>
        </article>
      ))}
    </article>
  );
}

export default TaskList;
