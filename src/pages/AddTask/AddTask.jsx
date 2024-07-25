import AddTaskForm from "../../modules/AddTaskForm/AddTaskForm";
import { useState } from "react";

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
