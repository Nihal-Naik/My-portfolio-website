import { motion } from 'motion/react'
import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { flipproject } from '../../features/detect/projectSlice';
import ytcf from '../../assets/images/ytcf-logo.svg'
import mjta from '../../assets/images/mjta.svg'
import mtlt from '../../assets/images/mtlt.svg'

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



const Project = () => {
    const dispatch=useDispatch()
    return (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants} className="left-1/2 -translate-x-1/2 top-[-10rem] md:top-0 absolute  flex p-0 sm:p-10 box-border z-40 justify-center items-center w-[100vw]">
            <motion.div variants={containerVariants} className="bg-[rgba(0,0,0,0.6)] grid grid-cols-3 grid-rows-2 md:grid-rows-2  justify-center gap-2 w-full p-[2%] rounded-2xl ">
                <motion.div variants={Variants} className='flex font-space justify-around items-center text-white p-[5%] gap-2 col-span-2 md:col-span-1 row-span-1 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div>
                        <img src={ytcf} alt="" className='h-40 rounded-2xl' />
                        <p>Youtube Comment Filterer</p>
                    </div>
                    <div className='grid gap-10'>
                        <a target='_blank' href="https://github.com/Nihal-Naik/youtube_comment_filter">
                            <FaGithub  className='cursor-pointer text-[rgba(255,255,255,0.6)] md:text-5xl text-4xl hover:text-white transition duration-150'/>
                        </a>
                        <a href="https://microsoftedge.microsoft.com/addons/detail/youtube-comment-filter/njbdbjgijeoillkhofhbhfaegmbdniia" target="_blank" >
                            <CgMediaLive className='cursor-pointer text-[rgba(255,255,255,0.6)]  md:text-5xl text-4xl hover:text-white transition duration-150' />
                        </a>
                    </div>
                </motion.div>
                <motion.div variants={Variants} className='flex justify-around items-center font-space text-white p-[5%] gap-2 col-span-3 md:col-span-2 row-span-1 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div>
                        <img src={mjta} alt="" className='h-40 rounded-2xl' />
                        <p>Job Application Tracker</p>
                    </div>
                    <div className='grid gap-10'>
                        <a href="https://github.com/Nihal-Naik/Mern-job-application-tracker" target="_blank" >
                            <FaGithub className='cursor-pointer text-[rgba(255,255,255,0.6)] md:text-5xl text-4xl hover:text-white transition duration-150'/>
                        </a>
                    </div>
                </motion.div>
                <motion.div variants={Variants} className='flex justify-around items-centercursor-pointer  font-space text-white p-[5%] gap-2 col-span-3 md:col-span-2 row-span-1 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div>
                        <img src={mtlt} alt="" className='h-40 rounded-2xl' />
                        <p>ToDo List</p>
                    </div>
                    <div className='grid gap-10'>
                        <a href="https://github.com/Nihal-Naik/mern-todo-app-with-typescript" target="_blank">
                            <FaGithub className='cursor-pointer text-[rgba(255,255,255,0.6)] md:text-5xl text-4xl hover:text-white transition duration-150'/>
                        </a>
                        <a href="https://justtodo-lavd.onrender.com" target="_blank">
                            <CgMediaLive className='cursor-pointer text-[rgba(255,255,255,0.6)]  md:text-5xl text-4xl hover:text-white transition duration-150' />
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    variants={Variants}
                    onClick={() => dispatch(flipproject())}
                    className="bg-[rgba(0,0,0,0.6)] rounded-xl md:rounded-2xl md:p-0 p-2 grid items-center md:justify-center text-white text-center cursor-pointer text-2xl sm:text-4xl mb-4 font-space  col-span-3 row-span-1 md:col-span-1"
                >
                    <motion.p whileHover={{ scale: 1.2 }} whileTap={{ rotate: 180 }}>Go Back</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Project
