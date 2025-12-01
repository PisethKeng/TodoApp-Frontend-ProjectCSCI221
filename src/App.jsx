import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import EditTask from './pages/EditTask'
import { TaskProvider } from './context/TaskProvider'

function App() {
  return (
      <Routes>
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
        <Route path="/calendar" element={
          <TaskProvider>
            <Calendar />
          </TaskProvider>
        } />
        <Route path="/EditTask/:id" element={
          <TaskProvider>
            <EditTask />
          </TaskProvider>
        } />
      </Routes>
  )
}

export default App
