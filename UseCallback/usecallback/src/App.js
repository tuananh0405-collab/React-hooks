import { useCallback, useState, useRef } from "react";
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const handleStart = useCallback(() => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 100);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
      clearInterval(intervalRef.current)
    setTime(0)
  },[])
  return (
    <div className="App" style={{ padding: "20px" }}>
      <div
        className="clockView"
        style={{
          border: "2px solid black",
          marginRight: "500px",
          textAlign: "center",
        }}
      >
        {time}
      </div>
      <div className="btn">
        <button style={{ marginRight: "10px" }} onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
