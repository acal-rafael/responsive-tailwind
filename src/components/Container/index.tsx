import React from 'react'

interface iContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: iContainerProps) => {
  return <div
    className='
      w-[100%]
      h-[100vh]
      border-[1px]
      border-black
    '
  >
    { children }
  </div>
}
