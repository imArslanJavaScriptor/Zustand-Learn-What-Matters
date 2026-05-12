import useTaskStore from "../store/taskStore";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  const search = useTaskStore((state) => state.search);
  const setSearch = useTaskStore((state) => state.setSearch);

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">
        <TaskForm />

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg outline-none"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg ${
                filter === "completed"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg ${
                filter === "pending"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        <TaskList />
      </div>
    </>
  );
}
export default Dashboard;