import React, { useEffect, useState } from "react";
import { getAllToDos, updateToDos } from "../todosmodel";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [ToDos, setToDos] = useState(["a", "b", "c"]);
  const [previousToDos, setPreviousToDos] = useState(ToDos);
  const localStorageKey = "ToDos_key";
  useEffect(async () => {
    // This runs once at the beginning of the page being rendered
    // let localStorageToDos = JSON.parse(localStorage.getItem(localStorageKey))
    // setToDos(localStorageToDos)
    // setPreviousToDos(localStorageToDos)
    let apiTodos = await getAllToDos();
    setToDos(apiTodos);
    setPreviousToDos(apiTodos);
  }, []);
  useEffect(() => {
    // localStorage.setItem(localStorageKey, JSON.stringify(ToDos));
    updateToDos(ToDos);
  }, [ToDos]);
  let onType = (event) => {
    if (event.code == "Enter") {
      let newToDos = [...ToDos];
      newToDos.push({ label: event.target.value, done: false });
      // newToDos.push(event.target.value);
      setToDos(newToDos);
      setPreviousToDos(ToDos);
      event.target.value = "";
    } else {
      // setInputValue(event.target.value)
    }
  };
  // setting state
  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do's</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          onKeyUp={onType}
          placeholder="Enter ToDo"
        />
      </div>
      <ul className="todo-ul">
        {ToDos.map((todo, index) => {
          return (
            <li className="todo-item" key={index}>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  let newToDos = [...ToDos];
                  (newToDos[index].done = !todo.done), setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              />
              <p className="todo-label">{todo.label}</p>
              {/* since it's a boolean then we add the "" to make it a string */}
              {/* <p>{todo.done + ""}</p>
              <p>{todo.done ? "yes" : "no"}</p> */}

              <button
                className="todo-delete-item far fa-trash-alt" aria-hidden="true"
                onClick={() => {
                  let newToDos = [...ToDos];
                  newToDos.splice(index, 1);
                  setToDos(newToDos);
                  setPreviousToDos(ToDos);
                }}
              > 
              </button>
            </li>
          );
        })}
      </ul>
      <div className="todo-footer">
        <p className="todo-items-left">{ToDos.length} Items Left</p>
        <button className="todo-undo-button"
          onClick={() => {
            setToDos(previousToDos);
          }}
        >
          Undo
        </button>
        <button className="todo-clearall-button"
          onClick={() => {
            let newToDos = [];
            setToDos(newToDos);
            previousToDos(ToDos);
          }}
        >
          Clear All
        </button>

      </div>
    </div>
  );
};

export default Home;
