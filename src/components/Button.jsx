import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'
const Button = () => {
  return (
    <div className='min-w-40 flex justify-between items-center px-4 py-2 bg-zinc-100 text-black rounded-full'>
        <span className='text-sm font-medium ' >Get Started</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button