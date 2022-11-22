import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AllComments from './Components/AllComments/AllComments'
import AllUsers from './Components/AllUsers/AllUsers'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import UserProfile from './Components/UserProfile/UserProfile'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allcomments' element={<AllComments />} />
        <Route path='/allusers' element={<AllUsers />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
