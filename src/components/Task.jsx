import React from "react";

const Task = ({ taskName, moveToActive, moveToCompleted, deleteTask }) => {
  return (
    <div className="taskWrapper">
      Task
      <div className="actions"></div>
    </div>
  );
};

export default Task;
