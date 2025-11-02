import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import Dashboard from './components/dashboard'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  )
}

export default App
