import { PropTypes } from "prop-types";
import "./Counter.css";

export default function CounterButton({
  by,
  increamentCounterMethod,
  decreamentCounterMethod,
}) {
  // const buttonStyle = {
  //   fontSize: "30px",
  //   backgroundColor: "#00a5ab",
  //   width: "100px",
  //   margin: "10px",
  //   color: "white",
  //   padding: "15px",
  //   borderRadius: "30px",
  // };

  // function incrementCounterFunction() {
  //   increamentCounterMethod(by);
  // }
  function decrementCounterFunction() {
    decreamentCounterMethod(by);
  }

  return (
    <div className='Counter'>
      <div>
        <button
          className='counterButton'
          onClick={() => increamentCounterMethod(by)}
        >
          +{by}
        </button>
        <button
          className='counterButton'
          onClick={() => decreamentCounterMethod(by)}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.prototype = {
  by: PropTypes.number,
};
