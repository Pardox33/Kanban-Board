import "./Board.css";
import Column from "./Column";
import { useState } from "react";
import SearchIcon from "./search.png";
import AddIcon from "./add.png";
import { useLocation } from "react-router-dom";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDragDropDnd } from "../dnd/useDragDropDnd.js";

function Board() {
  const location = useLocation();
  const [tableName, setTableName] = useState(
    location.state?.tableName || "Board Name",
  );
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState("");

  const { onDragEnd } = useDragDropDnd(columns, setColumns);

  const addColumn = () => {
    setColumns([
      ...columns,
      { id: crypto.randomUUID(), title: "Column", tasks: [] },
    ]);
  };

  const deleteColumn = (idToDelete) => {
    setColumns(columns.filter((col) => col.id !== idToDelete));
  };

  const filteredColumns = columns
    .map((col) => ({
      ...col,
      tasks: col.tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((col) => col.tasks.length > 0 || !search.trim());

  const noResults = search.trim() && filteredColumns.length === 0;

  return (
    <>
      <div className="all-board-header">
        <header className="header-page-board">
          <a className="logo" href="/">
            tasker
          </a>
          <div className="search-bar">
            <img src={SearchIcon} alt="search" className="sear" />
            <input
              type="text"
              placeholder="Search task..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>
      </div>

      <div className="board-content">
        <section className="board-header">
          <input
            type="text"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
          />
        </section>

        <section className="board-body">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="vertical" type="column">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="columns-droppable"
                >
                  {filteredColumns.map((col, idx) => (
                    <Column
                      key={col.id}
                      column={col}
                      index={idx}
                      setColumns={setColumns}
                      onDelete={() => deleteColumn(col.id)}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {noResults && <div className="no-results">No tasks found</div>}
          <button className="add-column-btn" onClick={addColumn}>
            <img src={AddIcon} alt="add" />
            <span>Add column</span>
          </button>
        </section>
      </div>
    </>
  );
}

export default Board;
