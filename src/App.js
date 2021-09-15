import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>increment/decrement by Redux</h1>
      <button onClick={() => dispatch(incNumber(5))}>increment</button>
      <span>{myState}</span>
      <button onClick={() => dispatch(decNumber())}>decrement</button>
    </div>
  );
};
export default App;
