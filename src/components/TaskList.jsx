import { useTaskStore } from "../store/taskStore";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);
  const search = useTaskStore((state) => state.search);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    const matchesSearch = task.title
      .toLowerCase()
      .includes((search || "").toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filteredTasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks found.</p>;
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
