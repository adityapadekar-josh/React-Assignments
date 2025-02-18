import React, { useState } from "react";
import { Todo } from "../types/todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onToggleComplete: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggleComplete,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-header">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo)}
          className="todo-checkbox"
        />
        <h3 className="todo-title">{todo.title}</h3>
        <div className="todo-actions">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="details-button"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <button onClick={() => onDelete(todo)} className="delete-button">
            Delete
          </button>
        </div>
      </div>
      {showDetails && (
        <div className="todo-details">
          <p>{todo.description || "No description provided."}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
