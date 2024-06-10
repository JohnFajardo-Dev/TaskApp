import "./Task.css";

function Task(props) {
  return (
    <article className={`task-card ${props.color}`}>
      <div className="task-cont">
        <div className="task-date-cont">
          <p className="task-date">{props.date}</p>
        </div>
        <h3 className="task-name">{props.title}</h3>
        <button className="task-btn">
          <h3>Confirm</h3>
        </button>
      </div>
    </article>
  );
}

export default Task;
