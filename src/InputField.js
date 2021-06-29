import { useState } from "react";

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function InputField(props) {
  const [word, setWord] = useState("");

  const changeWord = (event) => {
    setWord(event.target.value);
  };

  const addWord = () => {
    if (word !== "") {
      props.addWord(capitalizeFirstLetter(word));
      setWord("");
    }
  };

  const enterKey = (event) => {
    if (event.key === "Enter") {
      addWord();
    }
  };

  return (
    <div className="inputField">
      <input type="text" placeholder="Add your new todo" onChange={changeWord} value={word} onKeyUp={enterKey} />
      <button onClick={addWord}>
        <span className="fas fa-plus"></span>
      </button>
    </div>
  );
}
export default InputField;
