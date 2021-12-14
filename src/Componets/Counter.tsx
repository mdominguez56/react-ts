import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = (number: number = 1): void => {
    setCounter(counter + number);
  };
  return (
    <div className="mt-5">
      <h3>Counter with useState with Typescript</h3>
      <span>Value: {counter} </span>
      <br />
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => increase()}
      >
        + 1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => increase(2)}
      >
        + 2
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
