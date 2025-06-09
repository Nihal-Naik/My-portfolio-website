import React from 'react'

const Navbar = ({contactref}) => {
  const scrolltocontact=()=>{
    contactref.current?.scrollIntoView({behavior:'smooth'})
  }
  return (
    <nav className='z-50 flex justify-center items-start fixed top-0 bottom-0 right-0 w-[2rem] md:w-[5rem]'>
        <ul>
          <li onClick={scrolltocontact} className=' mt-50 w-[14rem] font-space text-[rgba(255,255,255,0.7)] cursor-pointer rotate-90 hover:text-[rgba(255,255,255,1)] active:text-[rgba(255,255,255,1)]'>Contact me</li>
        </ul>
    </nav>
  )
}

export default Navbar
