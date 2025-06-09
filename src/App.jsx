import React, { useRef, useState } from 'react'
import Homeparallax from './components/Homeparallax'
import Satellite from './components/Satellite'
import bglayer from './assets/images/space_1.svg'
import { ReactLenis, useLenis } from 'lenis/react'
import { motion } from 'motion/react'
import Startup from './components/Startup'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


const App = () => {
  const [loading, setLoading] = useState(true)
  const lenis = useLenis(({ scroll }) => {

  })
  const contactref = useRef()


  return (
    <div className='grid justify-center items-center overflow-scroll'>
      {loading ? 
        <motion.div exit={{opacity:0,scale:0}} className='bg-black w-[100vw] h-[100vh]'>
          <Startup setLoading={setLoading} />
        </motion.div> 
        :
        <ReactLenis root>
          <Navbar contactref={contactref}/>
          <div className='relative w-full' style={{ backgroundImage: `url(${bglayer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <Homeparallax />
            <Satellite />
            <Contact contactref={contactref} />
          </div>
        </ReactLenis>
      }
    </div>
  )
}

export default App
