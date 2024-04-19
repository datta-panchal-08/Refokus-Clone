import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {
  let data = [
    { title: "arqitel", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live: true, case: false },
    { title: "TTR", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live: true, case: false },
    { title: "YIR 2022", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live: true, case: true },
    { title: "YAHOO!", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis id dolorem atque quis, nam aliquam distinctio", live: true, case: true },
  ]
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  }
  return (
    <div className='mt-24 relative'>
      {data.map((val, index) => <Product key={index} count={index} mover={mover} val={val} />)}
      <div className='w-full top-0 h-full absolute pointer-events-none'>
        <motion.div initial={{ y: 23, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
          className='window absolute left-[43%] overflow-hidden w-[32rem] h-[23rem] bg-white'>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
            animate={{ y: -pos + `rem` }} className='w-full h-full bg-sky-100'>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
            animate={{ y: -pos + `rem` }} className='w-full h-full bg-sky-300'>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
            animate={{ y: -pos + `rem` }} className='w-full h-full bg-sky-500'>
          </motion.div>
          <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
            animate={{ y: -pos + `rem` }} className='w-full h-full bg-sky-700'>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products