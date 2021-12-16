import Counter from "./Componets/Counter";
import UserInfo from "./Componets/User";
import TimerFather from "./Componets/TimerFather";

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
    </>
  );
}

export default App;
