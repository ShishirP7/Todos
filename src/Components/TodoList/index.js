import React, { useState } from "react";
import TodoLists from "./lists";
export default function Todolist() {
  const [Lists, setLists] = useState([]);
  const [newText, setnewText] = useState("");

  const RemoveBtn = (id) => {
    setLists((ALists) => {
      return ALists.filter((ALists, index) => {
        return index !== id;
      });
    });
  };

  const Addbtn = () => {
    if (newText !== " ") {
      setLists((ALists) => {
        return [...ALists, newText];
      });
      setnewText(" ");
    }
  };
  const onchangetext = (e) => {
    setnewText(e.target.value);
  };
  return (
    <div class="formContainer mt-5  flex-column d-flex  justify-content-center">
      <h2>Your Tasks Today </h2>
      <div class="form mb-5 flex-row d-flex  justify-content-center gap-1">
        <input
          id="inputTodo"
          value={newText}
          placeholder="Input your TOdo"
          onChange={onchangetext}
        ></input>

        <button id="btn" onClick={Addbtn}>
          Add your Todo
        </button>
      </div>
      <ul>
        {Lists.map((ListsList, index) => {
          return (
            <div class="todoCard">
              <TodoLists
                key={index}
                lists={ListsList}
                RemoveBtn={RemoveBtn}
                id={index}
              />{" "}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
