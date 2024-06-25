import { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);

  const showHide = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showHide}>{show === true ? "Hide" : "Show"}</button>
      {show && <div>showing!!!</div>}
    </div>
  );
};
export default Toggle;
