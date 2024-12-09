import React, { useState } from "react";

function TaskContainer() {
  const [showTrufas, setShowTrufas] = useState(true);
  const [showBolos, setShowBolos] = useState(true);

  return (
    <div style={containerStyle}>
      <React.Fragment>
        <div style={taskStyle}>
          <h3>
            Trufas{" "}
            <button
              onClick={() => setShowTrufas(!showTrufas)}
              style={buttonStyle}
            >
              {showTrufas ? "Esconder" : "Mostrar"}
            </button>
          </h3>
          {showTrufas && (
            <ul>
              <li>Trufas de Chocolate</li>
              <li>Trufas de Maracujá</li>
              <li>Trufas de Morango</li>
            </ul>
          )}
        </div>
        <div style={taskStyle}>
          <h3>
            Bolo de Pote{" "}
            <button
              onClick={() => setShowBolos(!showBolos)}
              style={buttonStyle}
            >
              {showBolos ? "Esconder" : "Mostrar"}
            </button>
          </h3>
          {showBolos && (
            <ul>
              <li>Bolos de Chocolate</li>
              <li>Bolos de Prestígio</li>
              <li>Bolos de Morango</li>
            </ul>
          )}
        </div>
      </React.Fragment>
    </div>
  );
}

const containerStyle = {
  margin: "20px auto",
  padding: "10px",
  maxWidth: "600px",
  backgroundColor: "#C71585",
  borderRadius: "8px",
};

const taskStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  marginLeft: "10px",
  padding: "5px 10px",
  backgroundColor: "#FF69B4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default TaskContainer;
