import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Calendar from './pages/Calendar';
import Dashboard from './components/dashboard';
import EditTask from './pages/EditTask';
import { TaskProvider } from './context/TaskProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <ProtectedRoute>
            <TaskProvider>
              <Home />
            </TaskProvider>
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <TaskProvider>
              <Dashboard />
            </TaskProvider>
          </ProtectedRoute>
        } />
        <Route path="/addtask" element={
          <ProtectedRoute>
            <TaskProvider>
              <AddTask />
            </TaskProvider>
          </ProtectedRoute>
        } />
        <Route path="/calendar" element={
          <ProtectedRoute>
            <TaskProvider>
              <Calendar />
            </TaskProvider>
          </ProtectedRoute>
        } />
        <Route path="/EditTask/:id" element={
          <ProtectedRoute>
            <TaskProvider>
              <EditTask />
            </TaskProvider>
          </ProtectedRoute>
        } />
      </Routes>
  );
}

export default App;
