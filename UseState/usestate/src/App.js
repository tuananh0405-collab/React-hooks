import Subscribe from "./components/Subscribe";
import TodoList from "./components/TodoList";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div>
      {/* <Subscribe/> */}
      {/* <Toggle/> */}
      <TodoList/>
    </div>
  )
}

export default App;

/*const [state, setState] = useState(0);

  const handleClick =()=>{
    setState(state+1)
  }
  return (
    <div className="App">
      {state}
      <button onClick={handleClick}>Add one</button>
    </div>
  );*/