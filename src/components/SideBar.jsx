import React from 'react'

export default function SideBar() {
  return (
    // <div className="row fixed left-10 top-10 h-120 w-3xs flex flex-col items-center p-4 rounded-xl shadow-lg">
    //   <h2 className="fixed left-15 text-lg font-semibold mb-4">To do list</h2>
    //   <hr className="mt-8 border-dotted border-black w-full "></hr>
    //   <div className="mt-8 w-full text-black p-2 left-5 mb-3 text-start space-y-3">
    //     <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Dashboard</p>
    //     <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Add task</p>
    //     <p className="hover:bg-green-600 p-4 ml-4 rounded-2xl">Calendar</p>
    //   </div>
    // </div>

    <div className="flex flex-col items-start h-195 rounded-2xl bg-white py-8 px-10 shadow-sm">
      <h2 className="text-[28px] font-bold mb-6">To do list</h2>
      <hr className="border-dotted border-black w-full mb-6" />
      <div className="w-full text-black font-semibold text-[18px] space-y-2">
        <p className="transition duration-500 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Dashboard</p>
        <p className="transition duration-500 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Add task</p>
        <p className="transition duration-500 ease-in-out hover:bg-[#0D9488] hover:text-white p-4 rounded-xl cursor-pointer transition-colors">Calendar</p>
      </div>
    </div>
  )
}
