import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <div className="w-[32rem] p-8">
      <h1 className="text-center mb-8 text-3xl">Todo App</h1>
      <TodoContainer />
    </div>
  );
};

export default App;
