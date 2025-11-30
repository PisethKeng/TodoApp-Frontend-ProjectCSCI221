import Sidebar from "../components/SideBar";
import TaskCreation from "../components/TaskCreation";
import { useTasks } from "../context/TaskProvider";

export default function AddTask() {
  const { addTask } = useTasks();

  return (
    <div className="flex bg-[#FBFBF9] min-h-screen">
      <div className="w-1/4 mt-10 ml-15">
        <Sidebar/>
      </div>
      
      <div className="flex-1 py-10 pr-20">
        <h1 className="text-4xl font-semibold text-[#2A2A2A] mb-4 pt-2">Add New Task</h1>
          <TaskCreation onCreate={addTask} />
      </div>
    </div>
  );
}