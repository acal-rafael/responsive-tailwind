import React from 'react'

interface iContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: iContainerProps) => {
  return <div
    className='
    '
  >
    { children }
  </div>
}
