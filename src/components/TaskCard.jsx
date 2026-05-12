import { useTaskStore } from "../store/taskStore";

const TaskCard = ({ task }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  return (
    <div className="border border-gray-300 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <p
          className={`text-lg ${
            task.completed
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {task.title}
        </p>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;