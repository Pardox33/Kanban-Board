import "./Column.css";
import { useState } from "react";
import Task from "./Task";
import AddWindow from "./AddWindow";
// import { Draggable, Droppable } from "react-beautiful-dnd";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import add from "./add.png";
import del from "./delete.png";
import exp from "./expand.png";

function Column({ column, index, setColumns, onDelete }) {
  const [showWindow, setShowWindow] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === column.id
          ? {
              ...col,
              tasks: [...col.tasks, { ...task, id: crypto.randomUUID() }],
            }
          : col,
      ),
    );
  };

  const updateTask = (updatedTask) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === column.id
          ? {
              ...col,
              tasks: col.tasks.map((t) =>
                t.id === updatedTask.id ? updatedTask : t,
              ),
            }
          : col,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setColumns((cols) =>
      cols.map((col) =>
        col.id === column.id
          ? { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) }
          : col,
      ),
    );
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className="column"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="column-drag-handle" {...provided.dragHandleProps}>
            ☰
          </div>

          <div className="column-header">
            <div className="col-title-count">
              <input
                className="column-title"
                value={column.title}
                onChange={(e) =>
                  setColumns((cols) =>
                    cols.map((col) =>
                      col.id === column.id
                        ? { ...col, title: e.target.value }
                        : col,
                    ),
                  )
                }
              />
              <span>{column.tasks.length}</span>
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
            <Droppable
              droppableId={column.id}
              type="task"
              direction="horizontal"
            >
              {(provided) => (
                <div
                  className="column-body"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.tasks.map((task, idx) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={idx}
                      onDelete={() => deleteTask(task.id)}
                      onClick={() => {
                        setSelectedTask(task);
                        setShowWindow(true);
                      }}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}

          {showWindow && (
            <AddWindow
              onClose={() => {
                setShowWindow(false);
                setSelectedTask(null);
              }}
              task={selectedTask}
              onAddTask={addTask}
              onUpdateTask={updateTask}
            />
          )}
        </div>
      )}
    </Draggable>
  );
}

export default Column;
