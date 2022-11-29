import React from 'react'

export const Sibebar = () => {
  return (
    <div
      className='
        w-[15%]
        h-full
        flex
        flex-column
        justify-center
          

        border-[1px]
        border-black  
      '
    >
      <ul 
        className='
          flex
          flex-col
          gap-4

          border-[1px]
         border-black
        '
      >
        <li className='border-[1px] border-b-300'>Inicio</li>
        <li className='border-[1px] border-b-300'>Administração</li>
        <li className='border-[1px] border-b-300'>Patrimônio</li>
        <li className='border-[1px] border-b-300'>Logistica</li>
        <li className='border-[1px] border-b-300'>Almoxarifado</li>
        <li className='border-[1px] border-b-300'>Departamento</li>
        <li className='border-[1px] border-b-300'>Deposito</li>
        <li className='border-[1px] border-b-300'>Retira</li>
        <li className='border-[1px] border-b-300'>Sobre</li>
      </ul>
    </div>
  )
}
