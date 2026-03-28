import React from "react";

function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onEdit(todo.id, todo.text)}>
        Edit
      </button>
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;