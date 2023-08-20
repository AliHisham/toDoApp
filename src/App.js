import "./App.css";
import ToDoListWrapper from "./ToDoListWrapper/ToDoListWrapper";
import { AllToDoListContext } from "./Context/Context";

function App() {
  return (
    <div>
      <AllToDoListContext>
        <ToDoListWrapper />
      </AllToDoListContext>
    </div>
  );
}

export default App;
