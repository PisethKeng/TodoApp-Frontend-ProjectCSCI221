import Sidebar from "../components/SideBar";
import TaskCreation from "../components/TaskCreation";
import { useTasks } from "../context/TaskProvider";

export default function AddTask() {
  const { addTask } = useTasks();

  return (
    <div className="min-h-screen flex justify-start items-start bg-[#FBFBF9]">
      <div className="w-full max-w-[90%] p-8 ml-6 mt-2 gap-12 flex">
        <Sidebar/>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-6">Add New Task</h1>
          <TaskCreation onCreate={addTask} />
        </div>
      </div>
    </div>
  );
}