export default interface TaskData {
  id: number;
  name: string;
  status: "New" | "At work" | "Completed";
  date: string;
}
