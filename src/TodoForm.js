import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  const handleChange = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              className="todo-input"
              type="text"
              value={input}
              placeholder="Update Todo"
              onChange={handleChange}
              name="text"
              ref={inputRef}
            />
            <button className="todo-button">Update Todo</button>
          </>
        ) : (
          <>
            <input
              className="todo-input"
              type="text"
              value={input}
              placeholder="Enter Todo"
              onChange={handleChange}
              name="text"
              ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </>
  );
}

export default TodoForm;
