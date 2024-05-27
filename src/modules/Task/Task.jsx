import "./Task.css";

function Task() {
  return (
    <article className="task-card">
      <div className="task-cont">
        <div className="task-date-cont">
          <h3 className="task-date">7:00 am - 8:00 am</h3>
        </div>
        <h3 className="task-name">Task</h3>
        <button className="task-btn">Confirm</button>
      </div>
    </article>
  );
}

export default Task;
