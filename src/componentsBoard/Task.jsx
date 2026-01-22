import "./Task.css";
import del from "./cross.png";

function Task({ title, description, priority, deadline, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-content">
        <div className="tit-img">
          <h3>{title}</h3>
          <img src={del} alt="delete" onClick={onDelete} />
        </div>
        <p className="description">{description}</p>
      </div>
      <hr />

      <div className="task-pri-dead">
        <div className="priority">
          <span className="label">Priority:</span>
          <span className={`badge ${priority.toLowerCase()}`}>{priority}</span>
        </div>

        <div className="deadline">
          <span className="label">Deadline:</span>
          <span>{deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default Task;
