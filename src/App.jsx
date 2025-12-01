import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import Calendar from './pages/Calendar'
import Dashboard from './components/dashboard'
import EditTask from './pages/EditTask'
import { TaskProvider } from './context/TaskProvider'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
