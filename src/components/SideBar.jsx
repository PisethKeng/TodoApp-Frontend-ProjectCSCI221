import React from 'react'

export default function SideBar() {
  return (
    <div className="column fixed left-10 top-10 h-120 w-3xs flex flex-col items-center p-4 rounded-xl shadow-lg">
      <h2 className="fixed left-15 text-lg font-semibold mb-4">To do list</h2>
      <hr className="mt-8 border-dotted border-black w-full "></hr>
      <div className="mt-8 w-full text-black p-2 left-5 mb-3 text-start space-y-3">
        <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Dashboard</p>
        <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Add task</p>
        <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Calendar</p>
      </div>
    </div>
  )
}
