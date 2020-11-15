import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { normalize } from "styled-normalize"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Navigation from "../components/Home/Navigation.jsx"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../components/Context/GlobalContext"
import "./layout.css"
import CustomCursor from "../components/Cursor/CustomCursor"
import { AnimatePresence } from "framer-motion"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  margin: 0;
  background: none;
  border: none;
  cursor: none;
  overflow: hidden;
 
}
html{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  scroll-behavior: smooth;

}
body{
   background: ${props => props.theme.background};
   overscroll-behaviour: none;
}
`

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { currentTheme, movieData } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    const movieApi =
      "https://api.themoviedb.org/3/movie/550?api_key=a647ce9c87c271664138f78a195aeff0"
    fetch(movieApi)
      .then(res => res.json())
      .then(data => dispatch({ type: "LOAD_MOVIEDATA", movieData: data }))
  }, [])
  console.log(movieData)

  const darkTheme = {
    background: "#000",
    text: "#e7e7de",
  }
  const lightTheme = {
    background: "#e7e7de",
    text: "#000",
  }
  const onCursor = style => {
    if (style === "hovered") {
      dispatch({ type: "HOVERED", cursorStyle: "hovered" })
    } else {
      dispatch({ type: "POINTER", cursorStyle: "pointer" })
    }
  }
  return (
    <ThemeProvider
      theme={currentTheme === "dark" ? darkTheme : lightTheme}
      onCursor={onCursor}
    >
      <GlobalStyle />
      <CustomCursor />
      <Navigation onCursor={onCursor} />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
