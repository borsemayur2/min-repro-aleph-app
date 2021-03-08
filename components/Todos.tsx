import React from "react";
import TodoTable from "./TodoTable.tsx";

const todos = [
  { id: 1, title: "todo1" },
  { id: 2, title: "todo2" },
];

const Todos = () => {
  return <TodoTable todos={todos} />;
};

export default Todos;
