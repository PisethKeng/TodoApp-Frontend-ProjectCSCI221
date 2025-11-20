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
    <div className="flex bg-[#FBFBF9] min-h-screen">
      <div className="w-1/4 mt-10 ml-15">
        <Sidebar/>
      </div>
      
      <div className="flex-1 py-10 px-20">
        <h1 className="text-4xl font-semibold text-[#2A2A2A] mb-8 pt-2">Add New Task</h1>
          <TaskCreation onCreate={handleCreate} />
      </div>
    </div>
  );
}