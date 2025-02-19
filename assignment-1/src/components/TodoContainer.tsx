import { useState } from "react";
import TodoList from "src/components/TodoList";
import { Todo, TodoFormData } from "src/types/todo";
import TodoFormContainer from "src/components/TodoFormContainer";

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoData: TodoFormData) => {
    setTodos([...todos, { ...todoData, completed: false }]);
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const toggleComplete = (todo: Todo) => {
    const updatedTodos = todos.map((item) =>
      item === todo ? { ...item, completed: !item.completed } : item,
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoFormContainer addTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoContainer;
