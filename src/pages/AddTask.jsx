import Sidebar from "../components/SideBar";
import TaskCreation from "../components/TaskCreation";
import { useTasks } from "../context/TaskProvider";
import { CircleCheckBig } from "lucide-react";
export default function AddTask() {
  const { addTask } = useTasks();

  return (
    <div className="min-h-screen flex justify-start items-start bg-[#FBFBF9]">
      <div className="w-full max-w-[90%] p-8 ml-6 mt-2 gap-12 flex">
        <Sidebar/>
        <div className="flex-1 text-3xl font-semibold mb-6">
          <CircleCheckBig className="inline w-8 h-8 mr-2 text-gray-600 mb-1" />
          Add New Task
          <TaskCreation onCreate={addTask} />
        </div>
      </div>
    </div>
  );
}