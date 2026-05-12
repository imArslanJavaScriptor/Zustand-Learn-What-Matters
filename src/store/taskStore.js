import { create } from "zustand";
import { persist } from "zustand/middleware";

// store/taskStore.js
export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      filter: "all", // Added
      search: "", // Added

      setFilter: (filter) => set({ filter }), // Added
      setSearch: (search) => set({ search }), // Added

      addTask: (title) =>
        set((state) => ({
          tasks: [...state.tasks, { id: Date.now(), title, completed: false }],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
    }),
    { name: "task-storage" },
  ),
);
