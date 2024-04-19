import { motion } from "framer-motion"

const Marquee = ({ imagesUrls, direction }) => {
  return (
    <div className='flex w-full  overflow-hidden '>
      <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='flex flex-shrink-0 gap-40 py-10 pr-40'>

        {imagesUrls.map((url, index) => <img key={index} className='w-[6vw] flex-shrink-0 ' src={url} />)}

      </motion.div>
      <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='flex flex-shrink-0 gap-40 py-10 pr-40'>

        {imagesUrls.map((url, index) => <img key={index} className='w-[6vw] flex-shrink-0 ' src={url} />)}

      </motion.div>


    </div>
  )
}

export default Marquee