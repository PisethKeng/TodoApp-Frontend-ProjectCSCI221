import React from 'react'
import { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import { useTasks } from "../context/TaskProvider";
import Dashboard from './dashboard';

export default function Home() {
  const [ priorityValue, setPriorityValue ] = useState("all");
  const [ categoryValue, setCategoryValue ] = useState("all");
  const [ sortValue, setSortValue ] = useState("all");
  const { tasks, removeTask, getTasksByPriority, getTasksByCategory, getTasksByDueDate, getTasksByTitle, toggleTaskCompleted } = useTasks();
  const [ filterTasks, setFilterTasks ] = useState(tasks);
  const [ taskStatus, setTaskStatus ] = useState(tasks.length > 0);

  useEffect(() => {
    let result = [...tasks];

    if (priorityValue !== "all") {
      result = getTasksByPriority(priorityValue, result);
    }

    if (categoryValue !== "all") {
      result = getTasksByCategory(categoryValue, result);
    }

    if (sortValue === "duedate") {
      result = getTasksByDueDate(result);
    } 
    else if (sortValue === "title") {
      result = getTasksByTitle(result)
    }

    setFilterTasks(result);
    setTaskStatus(result.length > 0);

  }, [tasks, priorityValue, categoryValue, sortValue, getTasksByPriority, getTasksByCategory, getTasksByDueDate, getTasksByTitle]);

  return (
    <>
    <div className="min-h-screen flex justify-start items-start bg-[#FBFBF9]">
      <div className="w-full max-w-6xl p-8 gap-8 flex">
        {/* Sidebar */}
        <SideBar />
        {/* Dashboard wrapper card */}
        <div className="flex-1">
          {/* Dashboard Text */}
          <div className="text-3xl font-semibold mb-6">
            Dashboard
          </div>
          {/* Priority / Filters card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
            {/* Title */}
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Task Filters
            </h3>

            {/* Filter Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Task Priority */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Priority</label>
                <select
                  defaultValue="all"
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none"
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
                <label className="text-sm text-gray-600">Category</label>
                <select
                  defaultValue="all"
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none"
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
                <label className="text-sm text-gray-600">Sort By</label>
                <select
                  defaultValue="all"
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none"
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
            <div className="h-[545px] bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 mt-6">
              <h3 className="text-base font-semibold text-gray-800">Tasks</h3>
              <div id="task-list-placeholder" className="h-full flex flex-col items-center justify-center text-gray-500 text-xl">
                No tasks to display
              </div>
            </div>
          )}
          {taskStatus && (
            <div className="max-h-[545px] overflow-y-auto space-y-4">
              {filterTasks.map(task => (
                <Dashboard key={task.id} tasks={task} removeTask={removeTask} toggleTaskCompleted={toggleTaskCompleted} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  )
}
