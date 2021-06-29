function Foot(props) {
  return (
    <div className="footer">
      <span>You have {props.words.length} pending task</span>
      <button onClick={() => props.resetWords()}>Clear All</button>
    </div>
  );
}
export default Foot;
