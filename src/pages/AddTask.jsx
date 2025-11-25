import { useState, useEffect } from "react";
import Sidebar from "../components/SideBar"
import TaskCreation from "../components/TaskCreation";

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
    <div className="flex flex-col bg-[#FBFBF9] h-full p-7 min-h-screen">
      <Sidebar/>
      <div>
        <h1 className="mt-6 mx-auto max-w-2xl text-4xl font-semibold font-[#2A2A2A] pl-2">Add New Task</h1>
        <TaskCreation onCreate={handleCreate} />
      </div>
    </div>
  );
}