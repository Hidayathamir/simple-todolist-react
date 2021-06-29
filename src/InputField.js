function InputField() {
  return (
    <div className="inputField">
      <input type="text" placeholder="Add your new todo" />
      <button>
        <span className="fas fa-plus"></span>
      </button>
    </div>
  );
}
export default InputField;
