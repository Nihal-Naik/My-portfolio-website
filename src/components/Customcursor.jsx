import { useEffect, useRef } from "react"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const frame = useRef(null)

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const down = () => {
      cursorRef.current.classList.add("scale-150")
    }

    const up = () => {
      cursorRef.current.classList.remove("scale-150")
    }

    const animate = () => {
      cursorRef.current.parentElement.style.transform =
        `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`

      frame.current = requestAnimationFrame(animate)
    }

    animate()
    document.addEventListener("mousemove", move)
    document.addEventListener("mousedown", down)
    document.addEventListener("mouseup", up)

    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mousedown", down)
      document.removeEventListener("mouseup", up)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none">
      <div
        ref={cursorRef}
        className="
          w-5 h-5 rounded-full
          border-2 border-white
          transition-transform duration-150
        "
      />
    </div>
  )
}

export default CustomCursor
