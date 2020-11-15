import React, { useEffect, useState } from "react"
import { Cursor } from "../Styles/GlobalStyle"
import { useGlobalStateContext } from "../Context/GlobalContext"
const CustomCursor = () => {
  const { cursorStyle } = useGlobalStateContext()
  const [mousePosition, setMousePoisition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePoisition({ x, y })
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className={cursorStyle === "pointer" ? "pointer" : "hovered"}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></Cursor>
    </>
  )
}

export default CustomCursor
