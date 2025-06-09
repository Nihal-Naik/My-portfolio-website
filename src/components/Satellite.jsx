import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model } from '../models/Model'
import { OrbitControls } from '@react-three/drei'
import Skills from './attributes/Skills'
import { useSelector } from 'react-redux'
import Experience from './attributes/Experience'
import Education from './attributes/Education'
import Project from './attributes/Project'


const Satellite = () => {
  const toggleskill=useSelector((state)=>state.skill.value)
  const toggleexp=useSelector((state)=>state.exp.value)
  const toggleed=useSelector((state)=>state.education.value)
  const togglepro=useSelector((state)=>state.project.value)


  return (
    <div className='relative grid justify-center items-center  h-screen w-full'>
      <Canvas camera={{ position: [0, 0, 25], fov: 47 }} style={{width:'100vw',height:'120vh',touchAction:'auto'}}
      className=' touch-pan-y z-3 absolute h-full w-full translate-y-[-8rem] md:translate-y-[-5rem]'
    >
        <ambientLight intensity={10} />
        <directionalLight color='blue' position={[0, 5, 5]} intensity={10} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate />
        <Suspense>
          <Model />
        </Suspense>
      </Canvas>
      {toggleskill && <Skills /> }
      {toggleexp && <Experience />}
      {toggleed && <Education />}
      {togglepro && <Project />}
    </div>
      
  )
}

export default Satellite
