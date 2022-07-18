import React from "react";
import Todo from "../TodoList/index";
import "../Page/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div class="todoContainer">
      <Todo />
    </div>
  );
}
