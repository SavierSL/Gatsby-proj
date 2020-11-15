import React, { useEffect, useState, useRef } from "react"
import {
  BurgerBoxContainer,
  Exit,
  LinksContainer,
  TransitionLayer,
} from "../Styles/BurgerBoxStyle"
import { Container, Flex } from "../Styles/GlobalStyle"
import { Link } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { useGlobalStateContext } from "../Context/GlobalContext"
import { gsap } from "gsap"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Links
const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
]

const BurgerBox = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const { cursorStyle } = useGlobalStateContext()

  return (
    <>
      <AnimatePresence>
        {toggleMenu ? (
          <BurgerBoxContainer
            // initial={{ x: "100%" }}
            // animate={{ x: toggleMenu ? "0" : "100%" }}
            // transition={{
            //   duration: 0.3,
            //   ease: [0.6, 0.05, -0.01, 0.9],
            // }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { x: "100%" },
              exit: {
                x: "-100%",
                transition: {
                  duration: 0.3,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              visible: {
                x: toggleMenu ? "0%" : "100%",
                transition: {
                  duration: 0.3,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
            }}
          >
            <Container>
              <Flex spaceBetween>
                <h1>FILMA</h1>
                <Exit
                  onClick={() => setToggleMenu(!toggleMenu)}
                  onMouseEnter={() => onCursor("hovered")}
                  onMouseLeave={() => onCursor("pointer")}
                >
                  <motion.h2>x</motion.h2>
                </Exit>
              </Flex>
              <LinksContainer
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                }}
              >
                {links.map((link, index) => {
                  console.log(link.link)
                  return (
                    <AniLink
                      cover
                      bg="black"
                      duration={1.5}
                      key={index}
                      to={link.link}
                      activeStyle={{ color: "red" }}
                    >
                      <span
                        key={index}
                        onMouseEnter={() => onCursor("hovered")}
                        onMouseLeave={() => onCursor("pointer")}
                      >
                        {link.name}
                      </span>
                    </AniLink>
                  )
                })}
              </LinksContainer>
            </Container>
          </BurgerBoxContainer>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  )
}

export default BurgerBox
