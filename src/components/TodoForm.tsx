import React, { useState, FormEvent, ChangeEvent } from "react";
import { TodoFormData } from "../types/todo";
import "./TodoForm.css";

interface TodoFormProps {
  addTodo: (todo: TodoFormData) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;

    addTodo({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Todo title"
        className="todo-input"
      />
      <textarea
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        placeholder="Todo description"
        className="todo-textarea"
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
