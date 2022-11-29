import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'


export const Sibebar = () => {

  const [ open, setOpen ] = useState(true);

  const [ translate, setTranslate ] = useState<string>("0");
  
  const transitionSidebar = () => {

  }


  return (
    <div
      className={`
        ${open ? 'w-72' : 'w-20' }
        duration-500
        h-screen
        bg-blue-500
        relative
      `}
    >
      <div 
        className={`
          absolute 
          flex 
          justify-center 
          cursor-pointer 
          rounded-full 
          -right-3 
          top-9 
          w-6 
          h-6 
          border-2 
          border-black 
          bg-white
          duration-500
          ${!open && "rotate-180"}
        `}
        onClick={() => setOpen(prev => !prev)}
      >
        <IoIosArrowBack className='self-center'  />
      </div>


      <ul 
        className='
          flex
          flex-col
          gap-4
        '
      >
        <li 
          className='
            self-center 
            font-bold

            
          '
        >
          ***
        </li>
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
