import { useState, useEffect } from "react";
import TaskCreation from "../components/taskCreation";

export default function AddTask() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCreate = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <div>
        <TaskCreation onCreate={handleCreate} />
      </div>
    </div>
  );
}