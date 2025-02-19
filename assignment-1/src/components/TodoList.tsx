import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
  onToggleComplete: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onToggleComplete,
}) => {
  if (todos.length === 0) {
    return <p className="text-center">No todos yet. Add some!</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
