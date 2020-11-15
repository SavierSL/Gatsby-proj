import styled, { css } from "styled-components"
import { motion } from "framer-motion"
export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  background: none;
  position: relative;
  overflow: hidden;
  height: 100%;
  @media (min-width: 1024ox) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
    ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}
    ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`
export const Imagebox = styled(motion.div)`
  height: 40rem;
  width: 30rem;
  position: relative;
  background: green;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
  }
`
export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background: orange;
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 3000;
  &.pointer {
    width: 14px;
    height: 14px;
    background: orange;
  }
  &.hovered {
    background: orange !important;
    width: 2rem;
    height: 2rem;
    mix-blend-mode: difference;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
`
export const TransitionLayer = styled.div`
  background: orange;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 3001;
  overflow: hidden;

  ${props =>
    props.blue &&
    css`
      background: yellow;
    `}
`
