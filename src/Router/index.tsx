import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Body } from '../components/Body'
import { About } from '../pages/About'
import { Admin } from '../pages/Admin'
import { Home } from '../pages/Home'
import { User } from '../pages/User'

export const Router = () => {
  return <Routes>
    <Route path='/' element={<Body />} >
      
      <Route path=''  element={<Home />} />

      <Route path='admin' element={<Admin />} />

      <Route path='about' element={<About />} />

      <Route path='user' element={<User />} />

      <Route path='*' element={<h2>Not Found page</h2>} />

    </Route>
  </Routes>
}
