import "./Board.css";
import Column from "./Column";
import { useState } from "react";
import search from "./search.png";
import add from "./add.png";
import { useLocation } from "react-router-dom";

function Board() {
  const location = useLocation();
  const [tableName, setTableName] = useState(
    location.state?.tableName || "Board Name",
  );

  const [columns, setColumns] = useState([]);

  // const addColumn = () => {
  //   setColumns((prev) => prev + 1);
  // };

  const addColumn = () => {
    setColumns([...columns, { id: crypto.randomUUID() }]);
  };

  const deleteColumn = (idToDelete) => {
    setColumns(columns.filter((col) => col.id !== idToDelete));
  };

  return (
    <>
      <div className="all-board-header">
        <header className="header-page-board">
          <a className="logo" href="/">
            tasker
          </a>

          <div className="search-bar">
            <img src={search} alt="search" />
            <input type="text" placeholder="Search task..." />
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
          <div className="board-body-columns">
            <div className="columns">
              {columns.map((col) => (
                <Column key={col.id} onDelete={() => deleteColumn(col.id)} />
              ))}
            </div>

            <button className="add-column-btn" onClick={addColumn}>
              <img src={add} alt="add" />
              <span>Add column</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Board;
