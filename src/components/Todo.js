import React from "react";
import { ACTIONS } from "./Form";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.complete ? "line-through" : "none",
          color: todo.complete ? "grey" : "#000",
        }}
      >
        {todo.name}{" "}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
