import React from "react";
import Task from "../Task/Task";

import useState from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks){ 
      setTasks(JSON.parse(storedTasks))
    }
  }, []);

  const handleToggleTask = (taskId) = {
    setTasks((prevTasks)=> 
      prevTasks.map((task)=>{
        if(task.id ===taskId){
          return {...task,completed:!task.completed}
        }
        return task
      })
    )
  }
  
  const handleDeleteTask = (taskId)=>{
    setTasks((prevTasks)=>prevTasks.filter((task)=> task.id !==taskId))
  }
  
  
  return (
<article className='day-target'>
      {task.map((task) => (


    <article key={task.id} className={`task-card ${task.color}`}>
      <div className="task-cont">
        <div className="task-date-cont">
          <p className="task-date">{task.date}</p>
        </div>
        <h3 className="task-name">{task.name}</h3>
        <button onClick={()=> handleDeleteTask(task.id)} className="task-btn">
          <h3>Confirm</h3>
        </button>
      </div>
    </article>


      ))}
</article>
  );
}

export default TaskList;
