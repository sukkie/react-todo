import "./Counter.css";

export default function ResetButton({ resetCounterParentFunction }) {
  // const buttonStyle = {
  //   fontSize: "30px",
  //   backgroundColor: "#00a5ab",
  //   width: "100px",
  //   margin: "10px",
  //   color: "white",
  //   padding: "15px",
  //   borderRadius: "30px",
  // };

  function resetCounterFunction() {
    resetCounterParentFunction();
  }

  return (
    <div className='Counter'>
      <div>
        <button className='resetButton' onClick={resetCounterFunction}>
          Reset
        </button>
      </div>
    </div>
  );
}
