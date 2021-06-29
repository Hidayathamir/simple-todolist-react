import "./App.css";
import InputField from "./InputField";
import TodoList from "./TodoList";
import Foot from "./Foot";

function App() {
  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div>
        <InputField />
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <Foot />
      </div>
    </div>
  );
}

export default App;
