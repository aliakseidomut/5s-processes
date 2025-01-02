import { useEffect, useState } from "react";
import styles from "@styles/Tasks.module.css";
import TaskData from "../types/TaskData";
import useInput from "@utils/useInput";
import Task from "@components/Task";
import Modal from "@components/Modal";

export default function Tasks() {
  const taskName = useInput("");
  const [tasks, setTasks] = useState<TaskData[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState<TaskData | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskName.value.trim()) {
      const newTask: TaskData = {
        id: Date.now(),
        name: taskName.value,
        status: "New",
        date: new Date().toISOString().split("T")[0],
      };
      setTasks((prev) => [...prev, newTask]);
      taskName.reset();
    }
  };

  const handleEditTask = (task: TaskData) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleSaveTask = (updatedTask: TaskData) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setShowModal(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (id: number) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  return (
    <main className={`${styles.Tasks} container`}>
      <h2>Tasks</h2>
      <div className={styles.addTaskContainer}>
        <input
          type="text"
          {...taskName}
          placeholder="Enter the task"
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.button}>
          Add
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </tbody>
      </table>

      {showModal && editingTask && (
        <Modal
          task={editingTask}
          onClose={() => setShowModal(false)}
          onSave={handleSaveTask}
        />
      )}
    </main>
  );
}
