import "./AddWindow.css";
import { useState } from "react";
import exit from "./cross.png";

function AddWindow({ onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [deadline, setDeadline] = useState("");

  const handleAdd = () => {
    if (!title) return;

    onAddTask({
      title,
      description,
      priority,
      deadline,
    });

    onClose();
  };

  return (
    <div className="add-window-layout">
      <div className="add-window">
        <img src={exit} alt="del" className="close-btn" onClick={onClose} />

        <div className="task-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <hr />
          <div className="priority">
            Priority :
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="date">
            Deadline :
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <button className="add-task-btn" onClick={handleAdd}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWindow;
