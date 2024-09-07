import { useState } from "react";
// CSS
import "./AddTask.css";
// Components
import AddTaskForm from "../../modules/AddTaskForm/AddTaskForm";

// Get Task from localstorage
function getTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem("tasks");
  if (!tasksJSON) return [];
  return JSON.parse(tasksJSON);
}

function AddTask() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());
  return (
    <div className="taskform-cont">
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default AddTask;
