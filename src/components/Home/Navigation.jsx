import React, { useEffect, useState } from "react"
import { Flex, Container } from "../Styles/GlobalStyle"
import { Logo, Nav, Burger } from "../Styles/NavigationStyle"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../Context/GlobalContext"
import BurgerBox from "../BurgerBox/BurgerBox"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = ({ onCursor }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }
  console.log(onCursor)

  return (
    <>
      <BurgerBox
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <Container>
        <Flex spaceBetween>
          <Logo onClick={toggleTheme}>
            Filma <span>.</span>
          </Logo>

          <Burger
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("pointer")}
          >
            <span></span>
            <span></span>
          </Burger>
        </Flex>
      </Container>
    </>
  )
}

export default Navigation
