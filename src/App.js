import "./index.css";
import MainTaskContainer from "./components/MainTaskContainer";
import Task from "./components/Task";
import { useState } from "react";

function App({ children }) {
  // create function for add task
  // create function for moving task to active
  // create function for moving task to completed
  // create function to delete
  // add data

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "drink water",
      status: "current",
    },
    {
      id: 2,
      taskName: "Take walk",
      status: "current",
    },
    {
      id: 3,
      taskName: "Read pages",
      status: "current",
    },
    {
      id: 4,
      taskName: "Early sleep",
      status: "current",
    },
    {
      id: 5,
      taskName: "Morning stretch",
      status: "active",
    },
    {
      id: 6,
      taskName: "Make bed",
      status: "active",
    },
    {
      id: 7,
      taskName: "Clean desk",
      status: "active",
    },
    {
      id: 8,
      taskName: "Check book",
      status: "completed",
    },
    {
      id: 9,
      taskName: "Plan day",
      status: "completed",
    },
  ]);

  // filter by current
  const filteredByCurrent = tasks.filter((task) => task.status === "current");

  // filter by active
  const filteredByActive = tasks.filter((task) => task.status === "active");

  // filter by completed
  const filteredByCompleted = tasks.filter(
    (task) => task.status === "completed"
  );
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
        <MainTaskContainer
          sectionName="CURRENT"
          currentNumbers={`(4)`}
          task={filteredByCurrent}
        >
          {filteredByCurrent.map((t) => {
            return <Task taskName={t.taskName} />;
          })}
        </MainTaskContainer>

        <MainTaskContainer
          sectionName="ACTIVE"
          currentNumbers={`(3)`}
          task={filteredByActive}
        >
          {filteredByActive.map((t) => {
            return <Task taskName={t.taskName} />;
          })}
        </MainTaskContainer>

        <MainTaskContainer
          sectionName="COMPLETED"
          currentNumbers={`(2)`}
          task={filteredByActive}
        >
          {filteredByCompleted.map((t) => {
            return <Task taskName={t.taskName} />;
          })}
        </MainTaskContainer>
      </div>

      {/* // create section container component */}
    </div>
  );
}

export default App;
