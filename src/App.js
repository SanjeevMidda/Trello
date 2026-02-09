import "./index.css";
import MainTaskContainer from "./components/MainTaskContainer";
import Task from "./components/Task";

function App({ children }) {
  // create function for add task
  // create function for moving task to active
  // create function for moving task to completed
  // create function to delete
  // add data

  return (
    <div className="App">
      {/* // create title */}

      <header>
        <div className="circle"></div>
        <input type="text" placeholder="Enter Task" />
      </header>

      {/* // create component for number of items */}

      {/* // Create Habit component */}
      {/* // create Content area */}

      <div className="contentArea">
        <MainTaskContainer sectionName="CURRENT" currentNumbers={`(4)`}>
          <Task />
        </MainTaskContainer>
        <MainTaskContainer sectionName="ACTIVE" currentNumbers={`(3)`} />
        <MainTaskContainer sectionName="COMPLETED" currentNumbers={`(2)`} />
      </div>

      {/* // create section container component */}
    </div>
  );
}

export default App;
