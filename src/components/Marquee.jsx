import React from 'react'

const Marquee = ({imagesUrls}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden '>
       {imagesUrls.map(url => <img className='w-[6vw] flex-shrink-0 ' src={url}/>)}
       {imagesUrls.map(url => <img className='w-[6vw] flex-shrink-0' src={url}/>)}

    </div>
  )
}

export default Marquee