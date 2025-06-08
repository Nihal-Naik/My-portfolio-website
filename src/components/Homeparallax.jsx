import { useEffect, useState } from 'react'
import forelayer from '../assets/images/astronaut.svg'
import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Homeparallax = () => {

    const fore=useParallax({speed:-100})
    const text=useParallax({speed:5})
    const [hello, sethello] = useState(true)

    useEffect(() => {
      setTimeout(()=>{
        sethello(()=>(!hello))
      },1000)
    
      
    }, [])
  return (
    <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease:'easeIn' }} className='grid justify-center items-center'>
          <motion.div
              
              className=" relative w-[100vw] h-[60vh] sm:h-[40vh] md:h-[100vh] flex justify-center items-center"
            >
              <motion.img ref={fore.ref} className="absolute sm:top-[10%] scale-150 sm:scale-100  sm:translate-x-[-10rem] sm:translate-y-[0] md:translate-x-[-10rem] w-[80%] h-full z-2" src={forelayer} alt="" />
              <div ref={text.ref} className="absolute sm:top-[50%] top-[30%] z-1 text-white text-center">
                {hello ?
                  (
                    <motion.h1 initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4,ease:'easeIn'}} className='font-space text-4xl sm:text-6xl md:text-7xl'>Hello</motion.h1>
                  ):(
                    <TypeAnimation className='font-space text-4xl sm:text-6xl md:text-7xl '
                      sequence={[
                        1000,
                        'My name is Nihal Naik.', 1500,
                        'I am a\n Web Developer.', 1500,
                      ]}
                      speed={5}
                      repeat={Infinity}
                      deletionSpeed={50}
                      style={{ whiteSpace: 'pre-line' }}
                      
                    />
                  )                 
                }
              </div>
          </motion.div>
    </motion.div>
  )
}

export default Homeparallax
