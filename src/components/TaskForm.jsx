import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 px-4 py-2 rounded-lg outline-none"
      />

      <button className="bg-black text-white px-5 py-2 rounded-lg">
        Add
      </button>
    </form>
  );
}

export default TaskForm;