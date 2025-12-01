import React from 'react'
import { Link } from 'react-router'

export default function SideBar() {
  return (
    <div className="w-[300px] flex flex-col items-start h-195 rounded-2xl bg-white py-7 px-3 px-10 shadow-sm">
      <h2 className="text-[28px] font-bold mb-6">To do list</h2>
      <hr className="border-dotted border-black w-full mb-6" />
      <div className="w-full text-black font-semibold text-[18px] space-y-4">
        <Link to="/" className="block">
          <p className="duration-400 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Dashboard</p>
        </Link>
        <Link to="/addtask" className="block">
          <p className="duration-400 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Add task</p>
        </Link>
        <Link to="/calendar" className="block">
          <p className="duration-400 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Calendar</p>
        </Link>
      </div>
    </div>
  )
}
