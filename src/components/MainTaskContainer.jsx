const MainTaskContainer = ({ sectionName, currentNumbers, children }) => {
  return (
    <div className="MainTaskContainer">
      <div className="titleArea">
        <h1>{sectionName}</h1>
        <p>{currentNumbers}</p>
      </div>
      <div className="taskContainer">{children}</div>
    </div>
  );
};

export default MainTaskContainer;
