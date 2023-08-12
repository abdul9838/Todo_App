import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState([]);

  const formdata = (e) => {
    e.preventDefault();
    if (e.target.input.value.trim() !== "") {
      setInput([...input, e.target.input.value.trim("")]);
    }
    e.target.input.value = "";
  };
  const remove = (index) => {
    const new_todo = input.filter((_, i) => index !== i);
    setInput(new_todo);
  };
  const removeAll = () => {
    setInput([]);
  };

  return (
    <div className="container">
      <div className="todo">
        <h2>Todo App</h2>
        <br />
        <form onSubmit={formdata} action="">
          <input placeholder="Add your new todo" name="input" type="text" />
          <button key={input}>
            <i class="fa-solid fa-plus"></i>
          </button>
        </form>
        <ul>
          {input.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => remove(index)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
        {input[1] && (
          <div className="delall">
            <button className="delAll" onClick={() => removeAll()}>
              Delete All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
