import React from 'react'
import SideBar from '../components/SideBar'
import TaskCreation from '../components/TaskCreation'
export default function Home() {
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
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
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
                >
                  <option value="all">All</option>
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="study">Study</option>
                  <option value="health">Health</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Sort By</label>
                <select
                  defaultValue="all"
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 text-sm focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="duedate">Due Date</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
          {/* Task display box - placeholder for rendered tasks (logic to be added later :) ) */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-dashed border-gray-200 mt-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4">Tasks</h3>
            <div id="task-list-placeholder" className="min-h-[120px] flex items-center justify-center text-gray-500">
              No tasks to display
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
