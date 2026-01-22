import "./Column.css";
import { useState } from "react";
import Task from "./Task";
import AddWindow from "./AddWindow";
import add from "./add.png";
import del from "./delete.png";
import exp from "./expand.png";

function Column({ onDelete }) {
  const [tasks, setTasks] = useState([]);
  const [showWindow, setShowWindow] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: crypto.randomUUID() }]);
  };

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  return (
    <div className={`column ${!isExpanded ? "collapsed" : ""}`}>
      <div className="column-header">
        <div className="col-title-count">
          <input className="column-title" placeholder="Column"></input>
          <span>{tasks.length}</span>
        </div>
        <div className="icon-btn">
          <img src={add} alt="add" onClick={() => setShowWindow(true)} />
          <img
            src={exp}
            alt="expand"
            onClick={() => setIsExpanded(!isExpanded)}
          />
          <img src={del} alt="delete" onClick={onDelete} />
        </div>
      </div>
      {isExpanded && (
        <div className="column-body">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </div>
      )}
      {showWindow && (
        <AddWindow onClose={() => setShowWindow(false)} onAddTask={addTask} />
      )}
    </div>
  );
}

export default Column;
