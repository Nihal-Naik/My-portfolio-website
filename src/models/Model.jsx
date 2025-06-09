import React, { useRef } from 'react'
import { useGLTF, Html, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { motion, scale } from 'motion/react'
import { useDispatch,useSelector } from 'react-redux'
import { flipskill } from '../features/detect/skillSlice'
import {flipexp} from '../features/detect/expSlice'
import { flipeducation } from '../features/detect/educationSlice'
import { flipproject } from '../features/detect/projectSlice'
import { degToRad } from 'three/src/math/MathUtils.js'

export function Model(props) {
  const dispatch=useDispatch()

  const displayskill=() => {
    dispatch(flipskill())
  }
  const displayexp=() => {
    dispatch(flipexp())
  }
  const displayeducation=() => {
    dispatch(flipeducation())
  }
  const displayproject=()=>{
    dispatch(flipproject())
  }
  
  

  const animate = useRef()
  useFrame(() => {
    if (!animate.current) return
    animate.current.rotation.z += 0.003
  })
  const {viewport}=useThree((state)=>state.viewport)

  const { nodes, materials } = useGLTF('/scene.gltf')
  const Satelliteresponsive=Math.min(Math.max( window.innerWidth/1300,0.5),1.1)

  return (
    <group  ref={animate} {...props} dispose={null} rotation-y={degToRad(45)} scale={Satelliteresponsive}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Meshes */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.d_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.l_gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.solar_panels}
          
        />
        <Html occlude transform position={[-9, -0.6, -0.9]}  rotation={[Math.PI / 2, 0, Math.PI/2]} center>
          <motion.div  onClick={displayskill} className='font-space text-2xl text-white cursor-pointer active:rotate-180 transition duration-150' initial={{opacity:0}} whileInView={{opacity:1}}  whileHover={{scale:1.2}} viewport={{once:true,amount:0.8}}>Skills</motion.div>
        </Html>
        <Html occlude transform position={[-5.5, -0.6, -0.9]} fontSize={0.6} color="white" rotation={[Math.PI / 2, 0, Math.PI/2]}>
          <motion.div onClick={displayproject}  className='font-space text-white text-2xl cursor-pointer active:rotate-180 transition duration-150' initial={{opacity:0}} whileInView={{opacity:1}} whileHover={{scale:1.2}}  viewport={{once:true,amount:0.8}}>Projects</motion.div>
        </Html>
        <Html occlude transform position={[5.5, -0.6, -0.9]} fontSize={0.6} color="white" rotation={[Math.PI / 2, 0, Math.PI/2]}>
          <motion.div onClick={displayeducation} className='font-space text-white text-2xl cursor-pointer active:rotate-180 transition duration-150' initial={{opacity:0}} whileInView={{opacity:1}} whileHover={{scale:1.2}}  viewport={{once:true,amount:0.8}}>Education</motion.div>
        </Html>
        <Html occlude transform position={[9, -0.6, -0.9]} fontSize={0.6} color="white" rotation={[Math.PI / 2, 0, Math.PI/2]}>
          <motion.div onClick={displayexp} className='font-space text-white text-2xl cursor-pointer active:rotate-180 transition duration-150' initial={{opacity:0}} whileInView={{opacity:1}} whileHover={{scale:1.2}}  viewport={{once:true,amount:0.8}}>Experience</motion.div>
        </Html>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.plate}
        />
         
        
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
