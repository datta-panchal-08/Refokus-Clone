import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] pr-3 pl-3  py-5 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] flex justify-between items-center border-zinc-600'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.num}</span>
    </div>
  )
}

export default Stripe