import React from "react";
import Navbar from "../Components/Nav";
import TodoList from "./Lists/TodoList";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
}
