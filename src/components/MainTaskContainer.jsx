import React from "react";

const MainTaskContainer = ({ sectionName, currentNumbers }) => {
  return (
    <div className="MainTaskContainer">
      <div className="titleArea">
        <h1>{sectionName}</h1>
        <p>{currentNumbers}</p>
      </div>
      <div className="taskContainer"></div>
    </div>
  );
};

export default MainTaskContainer;
