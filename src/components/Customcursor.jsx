import { useEffect, useRef } from "react"

const Customcursor=()=>{
    const cursorref=useRef(null)
    const mouse=useRef({x:0,y:0})
    const frame=useRef(null)
    useEffect(()=>{
        
        const move=(e)=>{
            mouse.current.x=e.clientX
            mouse.current.y=e.clientY
        }
        const up=()=>{
            cursorref.current.classList.remove("scale-150", "bg-yellow-400")
        }
        const down=()=>{
            cursorref.current.classList.add("scale-150", "bg-yellow-400")
        }
        const animate=()=>{
            cursorref.current.style.transform=`translate3d(${mouse.current.x}px,${mouse.current.y}px,0) translate(-50%, -50%)`;
            frame.current=requestAnimationFrame(animate)
        }
        animate()
        document.addEventListener("mousemove",move)
        document.addEventListener("mouseup",up)
        document.addEventListener("mousedown",down)
        return()=>{
            document.removeEventListener("mousemove",move)
            document.removeEventListener("mousedown",down)
            document.removeEventListener("mouseup",up)
            cancelAnimationFrame(frame.current)
        }
    },[])

    return(
        <div ref={cursorref} className="fixed top-0 left-0 z-[9999]
        w-5 h-5 rounded-full
        bg-white
        pointer-events-none 
         transition-colors duration-150">

        </div>
    )
}
export default Customcursor