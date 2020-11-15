import React, { useRef } from "react"
import { GlobalProvider } from "./src/components/Context/GlobalContext"
import { TransitionLayer } from "./src/components/Styles/GlobalStyle"
import { gsap } from "gsap"
export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
