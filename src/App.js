import "./App.css";
// import "./Free.min.css";
import { useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import Foot from "./Foot";

function App() {
  const [words, setWords] = useState([]);

  const addWord = (word) => {
    const arr = [...words];
    arr.push(word);
    setWords(arr);
  };

  const deleteWord = (value) => {
    const arr = [...words];
    const index = arr.indexOf(value);
    arr.splice(index, 1);
    setWords(arr);
  };

  const resetWords = () => {
    setWords([]);
  };

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div>
        <InputField addWord={addWord} />
      </div>
      <div>
        <TodoList words={words} deleteWord={deleteWord} />
      </div>
      <div>
        <Foot words={words} resetWords={resetWords} />
      </div>
      {/* <Test /> */}
    </div>
  );
}

export default App;
