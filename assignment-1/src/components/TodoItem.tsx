import React, { useState } from "react";
import { Todo } from "../types/todo";

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
    <div className="border border-gray-300 rounded-md p-4 bg-white">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo)}
          className="w-5 h-5 cursor-pointer"
        />
        <h3 className="flex-grow">{todo.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-2 py-1 border-none rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-700"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <button
            onClick={() => onDelete(todo)}
            className="px-2 py-1 border-none rounded-md cursor-pointer text-white bg-red-500 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p>{todo.description || "No description provided."}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
