import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, removeTodo, updateTodo, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });
  const updateSubmit = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} className="edit" onSubmit={updateSubmit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineCloseCircle
          className="delete-icon"
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
        <AiOutlineEdit
          className="edit-icon"
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
        />
      </div>
    </div>
  ));
}

export default Todo;
