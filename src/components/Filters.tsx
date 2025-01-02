import styles from "@styles/Filters.module.css";

interface FiltersProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

export default function Filters({
  statusFilter,
  setStatusFilter,
}: FiltersProps) {
  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.h3}>Filter by Status:</h3>
      <select
        id="statusFilter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className={styles.select}
      >
        <option value="">All</option>
        <option value="New">New</option>
        <option value="At work">At work</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}
