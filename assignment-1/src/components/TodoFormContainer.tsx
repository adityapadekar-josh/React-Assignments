import React, { useState, FormEvent } from "react";
import { TodoFormData } from "src/types/todo";
import TodoForm from "src/components/TodoForm";

interface TodoFormContainerProps {
  addTodo: (todo: TodoFormData) => void;
}

const TodoFormContainer: React.FC<TodoFormContainerProps> = ({ addTodo }) => {
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
    <TodoForm
      handleSubmit={handleSubmit}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
    />
  );
};

export default TodoFormContainer;
