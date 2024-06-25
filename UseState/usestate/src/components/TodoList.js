import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const addNewTodo = () => {
    setList([...list, newTodo]);
    setNewTodo("");
  };
  const remove = (todoRemove) => {
    setList(list.filter((todo) => todo !== todoRemove));
  };

  return (
    <div>
      <div className="add">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={handleNewTodo}
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div className="display">
        <ul>
          {list.map((todo, index) => {
            return (
              <div key={index}>
                {todo}
                <button onClick={() => remove(todo)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
