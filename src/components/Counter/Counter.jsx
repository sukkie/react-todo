import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";

export default function Counter() {
  const [totalCount, setTotalCount] = useState(0);

  function increamentCounterParentFunction(by) {
    setTotalCount(totalCount + by);
  }

  function decreamentCounterParentFunction(by) {
    setTotalCount(totalCount - by);
  }

  function resetCounterParentFunction() {
    setTotalCount(0);
  }

  return (
    <>
      <span className='totalCount'>{totalCount}</span>
      <CounterButton
        by={1}
        increamentCounterMethod={increamentCounterParentFunction}
        decreamentCounterMethod={decreamentCounterParentFunction}
      ></CounterButton>
      <CounterButton
        by={2}
        increamentCounterMethod={increamentCounterParentFunction}
        decreamentCounterMethod={decreamentCounterParentFunction}
      ></CounterButton>
      <CounterButton
        by={3}
        increamentCounterMethod={increamentCounterParentFunction}
        decreamentCounterMethod={decreamentCounterParentFunction}
      ></CounterButton>
      <ResetButton
        resetCounterParentFunction={resetCounterParentFunction}
      ></ResetButton>
    </>
  );
}

Counter.prototype = {
  by: PropTypes.number,
};
