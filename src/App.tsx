import Counter from "./Componets/Counter";
import UserInfo from "./Componets/User";
import TimerFather from "./Componets/TimerFather";
import CounterReducer from "./Componets/CounterReducer";

function App() {
  return (
    <>
      <h1>React + Typescript!</h1>
      <hr />
      <Counter />
      <UserInfo />
      <hr />
      <h2> useEffect & useRef</h2>
      <TimerFather />
      <hr />
      <h2> useReducer</h2>
      <CounterReducer />
    </>
  );
}

export default App;
