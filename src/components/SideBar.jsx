import React from 'react'
import { Link } from 'react-router'

export default function SideBar() {
  return (
    <>
        {/* Sidebar */}
        <div className="h-[480px] w-[240px] bg-white flex flex-col items-center p-4 rounded-2xl shadow-xl">
          {/* Title */}
          <h2 className="text-xl font-semibold mb-3 self-start ml-4">
            To do List
          </h2>
          <hr className="border border-dotted border-gray-300 w-full mb-6" />

          {/* Menu Items */}
          <div className="w-full text-black px-2 space-y-4">
            <Link to="/">
              <p className="hover:bg-green-600 hover:text-white transition p-4 rounded-2xl cursor-pointer">
                Dashboard
              </p>
            </Link>
            <Link to="/add-task">
              <p className="hover:bg-green-600 hover:text-white transition p-4 rounded-2xl cursor-pointer">
                Add task
              </p>
            </Link>
            <Link to="/calendar">
              <p className="hover:bg-green-600 hover:text-white transition p-4 rounded-2xl cursor-pointer">
                Calendar
              </p>
            </Link>
          </div>
        </div>
    </>
  )
}
