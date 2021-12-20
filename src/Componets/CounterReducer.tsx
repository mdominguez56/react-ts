import { useReducer } from "react";

const initialState = {
  counter: 0,
};

type CounterType =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "reset" }
  | { type: "custom"; payload: number };

const counterReducer = (state: typeof initialState, action: CounterType) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "reset":
      return {
        ...state,
        counter: (state.counter = 0),
      };
    case "custom":
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>Contador: {counter}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "increase" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <button
        className="btn btn-outline-warning"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </>
  );
};

export default CounterReducer;
