import React from 'react'
import SideBar from '../components/SideBar'
import TaskCreation from '../components/TaskCreation'
export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-[#F5F5F0]">
      <SideBar />
    </div>
    </>
    
  )
}
