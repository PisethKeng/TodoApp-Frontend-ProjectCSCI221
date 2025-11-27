import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import Calendar from './pages/Calendar'
import Dashboard from './pages/dashboard'

function App() {
  return (
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addtask" element={<AddTask />} />
=======
        <Route path="/" element={
          <TaskProvider>
            <Home />
          </TaskProvider>
          } />
        <Route path="/dashboard" element={
          <TaskProvider>
            <Dashboard />
          </TaskProvider>
          } />
        <Route path="/addtask" element={
          <TaskProvider>
            <AddTask />
          </TaskProvider>
        } />
>>>>>>> Stashed changes
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
  )
}

export default App
