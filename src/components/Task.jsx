import React from "react";

const Task = ({ taskName, moveToActive, moveToCompleted, deleteTask }) => {
  return (
    <div className="taskWrapper">
      <h3>task</h3>
      <div className="actions">
        <button id="moveToActive"></button>
        <button id="moveToCompleted"></button>
        <button id="delete"></button>
      </div>
    </div>
  );
};

export default Task;
