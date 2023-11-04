import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from './components/Register'
import Header from './components/Header'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Register/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
