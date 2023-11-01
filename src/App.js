import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from './components/Register'
import Header from './components/Header'
import Signin from './components/Signin'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Register/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
