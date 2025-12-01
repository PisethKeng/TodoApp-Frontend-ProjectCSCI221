import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import Login from "./pages/Login";
import AddTask from './pages/AddTask'
import Calendar from './pages/Calendar'
import Dashboard from './components/dashboard'
import EditTask from './pages/EditTask'
import { TaskProvider } from './context/TaskProvider'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
  )
}

export default App
