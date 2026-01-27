import "./Task.css";
import del from "./cross.png";
// import { Draggable } from "react-beautiful-dnd";
import { Draggable } from "@hello-pangea/dnd";

function Task({ task, index, onDelete, onClick }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onClick}
        >
          <div className="task-content">
            <div className="tit-img">
              <h3>{task.title}</h3>
              <img
                src={del}
                alt="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              />
            </div>
            <p className="description">{task.description}</p>
          </div>

          <hr />

          <div className="task-pri-dead">
            <div className="priority">
              <span className="label">Priority:</span>
              <span className={`badge ${task.priority?.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
            <div className="deadline">
              <span className="label">Deadline:</span>
              <span>{task.deadline}</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
