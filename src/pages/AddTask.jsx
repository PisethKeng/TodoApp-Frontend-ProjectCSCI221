import Sidebar from "../components/SideBar";
import TaskCreation from "../components/TaskCreation";
import { useTasks } from "../context/TaskProvider";
import { CircleCheckBig } from "lucide-react";

export default function AddTask() {
  const { addTask } = useTasks();

  return (
    <div className="min-h-screen bg-[#FBFBF9] flex justify-center">
      <div className="w-full max-w-6xl px-4 py-6 md:px-8 md:py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <Sidebar />

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center">
              <CircleCheckBig className="w-7 h-7 sm:w-8 sm:h-8 mr-2 text-gray-600" />
              Add New Task
            </h1>

            <TaskCreation onCreate={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
}
