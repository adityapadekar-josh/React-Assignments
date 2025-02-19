import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Todo, TodoFormData } from "./types/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoData: TodoFormData) => {
    setTodos([...todos, { ...todoData, completed: false }]);
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const toggleComplete = (todo: Todo) => {
    setTodos(
      todos.map((item) =>
        item === todo ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div className="w-[32rem] p-8">
      <h1 className="text-center mb-8 text-3xl">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
