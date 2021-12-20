import Counter from "./Componets/Counter";
import UserInfo from "./Componets/User";
import TimerFather from "./Componets/TimerFather";
import CounterReducer from "./Componets/CounterReducer";
import Form from "./Componets/Form";
import Form2 from "./Componets/Form2";

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
      <hr />
      <h2>Custom Hooks</h2>
      <Form />
      <Form2 />
    </>
  );
}

export default App;
