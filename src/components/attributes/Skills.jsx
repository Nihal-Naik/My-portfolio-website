import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandThreejs } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { flipskill } from '../../features/detect/skillSlice';
import { useDispatch, useSelector } from 'react-redux';

// Motion-wrapped icons
const MotionFaHtml5 = motion(FaHtml5);
const MotionFaCss3Alt = motion(FaCss3Alt);
const MotionFaJs = motion(FaJs);
const MotionFaNodeJs = motion(FaNodeJs);
const MotionFaReact = motion(FaReact);
const MotionSiMongodb = motion(SiMongodb);
const MotionRiTailwindCssFill = motion(RiTailwindCssFill);
const MotionTbBrandThreejs = motion(TbBrandThreejs);

// Animation variants
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

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const Skills = () => {
  const dispatch = useDispatch();

  return (
        <motion.div
          key="skills-panel"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=" sm:left-0 absolute top-15 md:top-0 flex sm:p-5  z-40 justify-center items-center w-full"
        >
          <div className="bg-[rgba(0,0,0,0.6)] grid justify-center items-center w-full p-2 rounded-2xl ">
            <motion.div
              className="grid w-full h-auto grid-cols-3 md:grid-cols-4 p-5 sm:p-15 justify-center items-center"
              variants={containerVariants}
            >
              <div className='flex flex-col justify-center items-center'>
                <MotionFaHtml5 variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>HTML</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <MotionFaCss3Alt variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>CSS</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <MotionFaJs variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>JAVASCRIPT</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <MotionFaNodeJs variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>NODE JS</p>
              </div>
              
              <div className='flex flex-col justify-center items-center'>
                 <MotionFaReact variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>REACT</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                 <MotionSiMongodb variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}} className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>MONGODB</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                 <MotionRiTailwindCssFill variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}}  className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>TAILWIND</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <MotionTbBrandThreejs variants={iconVariants} whileHover={{rotate:360,transition:{duration:0.5}}}  className="text-white text-4xl sm:text-9xl p-5 box-content" />
                <p className='font-space text-white text-md md:text-2xl'>THREE JS</p>
              </div>
            </motion.div>
            <motion.p
              onClick={() => dispatch(flipskill())}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate:180 }}
              className="text-white text-center cursor-pointer text-2xl sm:text-4xl mb-4 font-space"
            >
              Go Back
            </motion.p>
          </div>
        </motion.div>
      )}


export default Skills;
