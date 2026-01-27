import "./AddWindow.css";
import { useState } from "react";
import exit from "./cross.png";

function AddWindow({ onClose, onAddTask, onUpdateTask, task }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "Low");
  const [deadline, setDeadline] = useState(task?.deadline || "");

  const handleSave = () => {
    if (!title) return;

    const newTask = {
      id: task?.id || crypto.randomUUID(),
      title,
      description,
      priority,
      deadline,
    };
    task ? onUpdateTask(newTask) : onAddTask(newTask);
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
          <button className="add-task-btn" onClick={handleSave}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWindow;
