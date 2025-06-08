import { motion } from 'motion/react'
import { flipeducation } from '../../features/detect/educationSlice';
import { useDispatch } from 'react-redux';

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


const Education = () => {
    const dispatch=useDispatch()
    return (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={containerVariants} className="left-8 sm:left-0 absolute top-0 flex p-0 sm:p-10 box-border z-40 justify-center items-center w-[100vw]">
            <motion.div variants={containerVariants} className="bg-[rgba(0,0,0,0.6)] grid grid-cols-4 grid-rows-2 md:grid-rows-3 gap-2 justify-center  w-full p-[2%] rounded-2xl h-full">
                <motion.div variants={Variants} className='grid font-space text-white p-[5%] gap-2 col-span-2 row-span-1 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div className='flex justify-between'>
                        <h1 className='md:text-2xl'>Bachelor's Degree.</h1>
                        <p className='' >2020-2024</p>
                    </div>
                    <h1 className=' text-white text-md md:text-lg font-grotesk'>I completed my Bachelors in Information Technology from Goa College of Engineering with cgpa of 8.00.</h1>
                </motion.div>
                <motion.div variants={Variants} className='grid grid-rows-7 font-space text-white p-[5%] gap-2 col-span-2 md:col-span-2 row-span-1 md:row-span-2 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div className='flex justify-between row-span-2'>
                        <h1 className='text-sm md:text-2xl'>Higher Secondary.</h1>
                        <h1 className=''>2018-2020</h1>
                    </div>
                    <h1 className='text-white row-span-5 text-md md:text-lg font-grotesk'>I completed my Higher Studies from G.V.M's S.N.J.A Higher Secondary School securing 72% in 12th grade.</h1>
                </motion.div>
                <motion.div variants={Variants} className='grid grid-rows-7 font-space text-white  p-[5%] gap-2 md:col-span-2 col-span-3 row-span-1 md:row-span-2 bg-[rgba(0,0,0,0.6)] rounded-2xl'>
                    <div className='flex justify-between row-span-2'>
                        <h1 className='text-2xl'>Secondary School.</h1>
                        <h1>2013-2018</h1>
                    </div>
                    <h1 className='row-span-5 text-white text-md md:text-lg font-grotesk'>I completed my Secondary Education from A.J.DE Almeida High School securing 89% in my 10th grade.</h1>
                </motion.div>
                
                <div
                    onClick={() => dispatch(flipeducation())}
                    className="bg-[rgba(0,0,0,0.6)] rounded-2xl grid items-center md:justify-center text-white text-center cursor-pointer text-2xl sm:text-4xl mb-4 font-space col-span-1 row-span-1 md:col-span-2"
                >
                    <motion.p whileHover={{ scale: 1.2 }} whileTap={{ rotate: 180 }}>Go Back</motion.p>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Education
