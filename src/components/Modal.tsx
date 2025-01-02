import styles from "@styles/Modal.module.css";
import { useState } from "react";
import TaskData from "../types/TaskData";

interface ModalProps {
  task: TaskData;
  onClose: () => void;
  onSave: (updatedTask: TaskData) => void;
}

const STATUSES = ["New", "At work", "Completed"];

export default function Modal({ task, onClose, onSave }: ModalProps) {
  const [name, setName] = useState(task.name);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    onSave({ ...task, name, status });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2>Edit Task</h2>
        <input
          type="text"
          id="edit-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          id="edit-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskData["status"])}
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className={styles.buttons}>
          <button onClick={handleSave} className={styles.button}>
            Save
          </button>
          <button onClick={onClose} className={styles.button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
