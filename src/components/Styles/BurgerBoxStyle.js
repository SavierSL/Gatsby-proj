import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const BurgerBoxContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: white;
  z-index: 1000;
`
export const Exit = styled.div`
  height: 3rem;
  width: 3rem;
  border: solid black 1px;
  text-align: center;
  border-radius: 100%;
  h2 {
    padding: 5px;
    margin: 0;
    font-weight: 100;
  }
  &:hover {
    background: black;
    color: white;
  }
`
export const LinksContainer = styled(motion.div)`
  text-align: center;
  height: 25rem;

  a {
    text-decoration: none;
    display: block;
    margin: 2rem auto;
    width: 20rem;
    font-size: 4rem;
    color: black;
    span {
      &:hover {
        color: red;
      }
    }
  }
`
