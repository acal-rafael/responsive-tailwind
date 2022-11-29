import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../Container'
import { Header } from '../Header'
import { Sibebar } from '../Sibebar'

export const Body = () => {
  return <div 
    className='
      flex

    '
  >
    <Sibebar />
    
    <Container>
      <Header />
      <Outlet />
    </Container>
  </div>
}
