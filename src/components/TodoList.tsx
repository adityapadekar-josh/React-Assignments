import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";
import "./TodoList.css";

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
    return <p className="no-todos">No todos yet. Add some!</p>;
  }

  return (
    <div className="todo-list">
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
