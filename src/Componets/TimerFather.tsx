import { useState } from "react";
import Timer from "./Timer";

const TimerFather = () => {
  const [milisecond, setMilisecond] = useState(1000);

  return (
    <div>
      <span>Milisegundos: {milisecond}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(1)}
      >
        1
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(100)}
      >
        100
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(500)}
      >
        500
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(2000)}
      >
        2000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisecond(3000)}
      >
        3000
      </button>
      <br />
      <br />
      <Timer miliseconds={milisecond} />
    </div>
  );
};

export default TimerFather;
