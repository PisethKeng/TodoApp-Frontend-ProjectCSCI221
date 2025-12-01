import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import { useTasks } from "../context/TaskProvider";
import Dashboard from '../components/dashboard';
import { LayoutDashboard } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [priorityValue, setPriorityValue] = useState("all");
  const [categoryValue, setCategoryValue] = useState("all");
  const [sortValue, setSortValue] = useState("all");
  const {
    tasks,
    removeTask,
    sortTasks,
    getTasksByPriority,
    getTasksByCategory,
    getTasksByDueDate,
    getTasksByTitle,
    toggleTaskCompleted
  } = useTasks();
  const [filterTasks, setFilterTasks] = useState(tasks);
  const [taskStatus, setTaskStatus] = useState(tasks.length > 0);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    let result = [...tasks];
    result = sortTasks(result);

    if (priorityValue !== "all") {
      result = getTasksByPriority(priorityValue, result);
    }

    if (categoryValue !== "all") {
      result = getTasksByCategory(categoryValue, result);
    }

    if (sortValue === "duedate") {
      result = getTasksByDueDate(result);
    } else if (sortValue === "title") {
      result = getTasksByTitle(result);
    }

    setFilterTasks(result);
    setTaskStatus(result.length > 0);

  }, [
    tasks,
    priorityValue,
    categoryValue,
    sortTasks,
    sortValue,
    getTasksByPriority,
    getTasksByCategory,
    getTasksByDueDate,
    getTasksByTitle
  ]);

  return (
    <>
      <div className="min-h-screen bg-[#FBFBF9] flex justify-center">
        <div className="w-full max-w-6xl px-4 py-6 md:px-8 md:py-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Sidebar */}
            <SideBar />

            {/* Dashboard wrapper */}
            <div className="flex-1">
              {/* Dashboard Text */}
              <div className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center">
                <LayoutDashboard className="w-7 h-7 sm:w-8 sm:h-8 mr-2 text-gray-600" />
                Dashboard
              </div>

              {/* Priority / Filters card */}
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200 mb-6">
                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800 mb-4">
                  Task Filters
                </h3>

                {/* Filter Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                  {/* Task Priority */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Priority</label>
                    <select
                      defaultValue="all"
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
                      onChange={e => setPriorityValue(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Category</label>
                    <select
                      defaultValue="all"
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
                      onChange={e => setCategoryValue(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="personal">Personal</option>
                      <option value="work">Work</option>
                      <option value="study">Study</option>
                      <option value="health">Health</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Sort By</label>
                    <select
                      defaultValue="all"
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]"
                      onChange={e => setSortValue(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="duedate">Due Date</option>
                      <option value="title">Title</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Task display box */}
              {!taskStatus && (
                <div className="min-h-[260px] md:min-h-[400px] bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 mt-6 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Tasks</h3>
                  <div
                    id="task-list-placeholder"
                    className="flex-1 flex flex-col items-center justify-center text-gray-500 text-lg md:text-xl text-center px-4"
                  >
                    No tasks to display
                  </div>
                </div>
              )}

              {taskStatus && (
                <div className="max-h-[60vh] md:max-h-[535px] rounded-xl overflow-y-auto space-y-4 mt-4">
                  {filterTasks.map(task => (
                    <Dashboard
                      key={task.id}
                      tasks={task}
                      removeTask={removeTask}
                      toggleTaskCompleted={toggleTaskCompleted}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
