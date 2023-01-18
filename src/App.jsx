import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portal from './Telas/Portal/Portal'
import Login from './Telas/Login'

function App() {
  return (    
    <Router>
      <Routes>
        <Route path='/:id' element={<Login />} />
        <Route path='/Portal' element={<Portal />} />        
      </Routes>
    </Router>
  )
}

export default App
