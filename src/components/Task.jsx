import React from "react";

const Task = ({
  taskName,
  moveToActive,
  moveToCompleted,
  deleteTask,
  keyID,
}) => {
  console.log(keyID);
  return (
    <div className="taskWrapper">
      <h3>{taskName}</h3>
      <div className="actions">
        <button id="moveToActive" onClick={() => moveToActive(keyID)}></button>
        <button
          id="moveToCompleted"
          onClick={() => moveToCompleted(keyID)}
        ></button>
        <button
          id="delete"
          onClick={() => {
            deleteTask(keyID);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Task;
