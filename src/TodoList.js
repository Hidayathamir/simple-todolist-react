function TodoList(props) {
  const deleteWord = (value) => (e) => {
    props.deleteWord(value);
  };

  const showTodoList = (value, index, array) => {
    return (
      <li key={index}>
        {value}
        <span onClick={deleteWord(value)}>
          <i className="fas fa-trash"></i>
        </span>
      </li>
    );
  };
  return <ul className="todoList">{props.words.map(showTodoList)}</ul>;
}

export default TodoList;
