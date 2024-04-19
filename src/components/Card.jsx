import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion } from 'framer-motion'

const Card = ({width,start,para,hover='false'}) => {
  return (
    <motion.div whileHover={{backgroundColor : hover === "true" && "#7443ff",padding :"25px"}} className={` bg-zinc-800 p-5 hover:${hover} rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward/>
            </div>
            <h1 className='text-3xl font-medium mt-5'>whatever heading</h1>

        </div>       
        <div className='down w-full'>
            {
                start && (
                    <>
                    <h1 className='text-6xl font-semibold tracking-tight leading-none ' >start a project</h1>
                <button className='rounded-full px-5 mt-3 py-2 border-[1px]  border-zinc-50'>Contact Us</button>
                </>
                ) 
            }
            {para && <p className='text-sm font-medium text-zinc-500 '>Lorem ipsum dolor sit amet consectetur.</p>}
        </div>
    </motion.div>
  )
}

export default Card