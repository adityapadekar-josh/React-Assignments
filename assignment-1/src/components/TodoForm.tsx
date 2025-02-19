import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

interface TodoFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  return (
    <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Todo title"
        className="p-2 border border-gray-300 rounded-md text-base"
      />
      <textarea
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        placeholder="Todo description"
        className="p-2 border border-gray-300 rounded-md text-base min-h-[100px] resize-y"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer text-base hover:bg-green-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
