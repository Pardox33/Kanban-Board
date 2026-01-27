import "./NameTable.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NameTable() {
  const navigate = useNavigate();
  const [tableName, setTableName] = useState("");

  const goToBoard = () => {
    navigate("/board", { state: { tableName } });
  };

  return (
    <div className="name-table-page">
      <header className="table-header">
        <a className="logo" href="/">
          tasker
        </a>
      </header>
      <main>
        <div className="card-table">
          <h2>Name your table</h2>
          <div className="input-name">
            <input
              type="text"
              placeholder="Enter table name..."
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />
          </div>
          <div className="line"></div>
          <div className="actions">
            <div className="ignore" onClick={goToBoard}>
              Ignore
            </div>
            <div className="next" onClick={goToBoard}>
              Next
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NameTable;
