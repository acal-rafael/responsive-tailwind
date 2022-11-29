import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../Container'
import { Header } from '../Header'
import { Sibebar } from '../Sibebar'

export const Body = () => {
  return <div 
    className='
      w-[100%]
      h-[100vh]
      flex
      flex-row

      border-[1px]
      border-black
    '
  >
    <Sibebar />
    
    <Container>
      <Header />
      <Outlet />
    </Container>
  </div>
}
