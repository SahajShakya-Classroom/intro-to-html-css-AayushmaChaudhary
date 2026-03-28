import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, text: input } : t
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id, text) => {
    setInput(text);
    setEditId(id);
  };

  return (
    <div>
      <h2>Todo CRUD</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editId ? "Update" : "Add"}
      </button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default TodoApp;