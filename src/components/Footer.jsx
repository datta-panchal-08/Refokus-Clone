import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-2 flex gap-7'>
        {["privacy policy","cookie policy","impressum","terms"].map((item ,index)=> <a key={index} className='block cursor-pointer text-zinc-600 mt-2 capitalize'>{item}</a>)}
        </div>

    </div>
  )
}

export default Footer