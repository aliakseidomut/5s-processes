import TaskData from "../types/TaskData";
import styles from "@styles/Task.module.css";

interface TaskProps {
  task: TaskData;
  onEdit: (task: TaskData) => void;
  onDelete: (id: number) => void;
}

export default function Task({ task, onEdit, onDelete }: TaskProps) {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.status}</td>
      <td>{task.date}</td>
      <td>
        <button className={styles.button} onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className={styles.button} onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
