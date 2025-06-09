import { motion } from 'motion/react'
import { flipexp } from '../../features/detect/expSlice'
import { useDispatch } from 'react-redux'

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};


const Experience = () => {
    const dispatch=useDispatch()
  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants} className="left-1/2 -translate-x-1/2 absolute top-15 md:top-0 flex sm:p-10 box-border z-40 justify-center items-center w-[100vw]">
      <motion.div variants={containerVariants} className="bg-[rgba(0,0,0,0.6)] grid gap-4 justify-center items-center w-full p-[10%] ">
              <motion.h1 variants={Variants} className='text-white text-2xl md:text-4xl font-space'>Intern Web Developer at Genora Infotech.</motion.h1>
              <motion.ul className='text-white text-xs md:text-lg font-space list-disc'>
                  <motion.li variants={Variants}>Developed an Optical Character Recognition (OCR) web application integrated with Firebase for database and storage functionalities.</motion.li>
                  <motion.li variants={Variants}>The platform allowed users to upload image files and search for specific words</motion.li>
                  <motion.li variants={Variants}>The software would search the image files stored in the database and would return the links of images of the document that contained that entered word.</motion.li>
                  <motion.li variants={Variants}>To ensure data security, all admin routes were protected with authentication, allowing access only to authorized users.</motion.li>
              </motion.ul>
              <motion.p
              onClick={() => dispatch(flipexp())}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate:180 }}
              className="text-white text-center cursor-pointer text-2xl sm:text-4xl mb-4 font-space"
            >
              Go Back
            </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Experience
