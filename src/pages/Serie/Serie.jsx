import { useLocation } from "react-router-dom";
import { useState } from "react";
import { PositionSvg } from "../../components/PositionSvg/PosistionSvg.js";

export function Serie() {
  let location = useLocation();
  let [counter, setCounter] = useState(0);

  const previousPose = () => {
    counter > 0 ? setCounter(--counter) : setCounter(counter);
  };
  const nextPose = () => {
    counter < location.state.length - 1
      ? setCounter(++counter)
      : setCounter(counter);
  };

  return (
    <div className="wrapper-pose">
      <PositionSvg
        size={10}
        className="svg__pose"
        id={location.state[counter].id}
      />
      <p>{location.state[counter].sanskrit_name}</p>
      <p>{location.state[counter].english_name}</p>
      <div className="wrapper__pose__btn">
        <button type="button" onClick={previousPose}>
          Previous
        </button>
        <button type="button" onClick={nextPose}>
          Next
        </button>
      </div>
    </div>
  );
}
