import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

export const TitleContainer = styled.div`
  background: white;
`
export const Line = styled.div`
  margin-top: -1rem;
  height: 9rem;
  width: 100%;

  position: relative;

  @media (min-width: 300px) {
    font-size: 4rem;
    height: 5rem;
  }
  @media (min-width: 300px) {
    font-size: 4rem;
  }
  @media (min-width: 1000px) {
    font-size: 8rem;
    height: 10rem;
  }
`
export const Title = styled.h1`
  font-size: 8rem;
  color: ${props => props.theme.text};
  letter-spacing: 1rem;
  position: absolute;
  margin: 0;
  transform: translateY(-100%);
  @media (min-width: 400px) {
    font-size: 2rem;
  }
  @media (min-width: 300px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 8rem;
  }
`
export const HeaderContent = styled.div`
  height: 36vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`
export const LayerBlack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: orange;
  z-index: 20;
  border: none;
`
export const LayerWhite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.text};
  @media (min-width: 400px) {
    font-size: 6rem;
  }
  @media (min-width: 300px) {
    font-size: 5rem;
  }
  @media (min-width: 1000px) {
    font-size: 7rem;
  }
  h1 {
    font-size: 6rem;
    margin: 0;
    margin-top: 1rem;
    margin-left: 0;
    color: ${props => props.theme.background};
    height: 10rem;
    @media (min-width: 400px) {
      font-size: 6rem;
    }
    @media (min-width: 300px) {
      font-size: 5rem;
      margin-top: 2rem;
    }
    @media (min-width: 1000px) {
      font-size: 7rem;
    }
  }
  h2 {
    position: absolute;
    right: 1rem;
    color: ${props => props.theme.background};
  }
  h4 {
    color: ${props => props.theme.background};
  }
`
export const LineContainer = styled.div`
  width: 100vw;
  background: white;
`
export const HeaderContainer = styled.div`
  margin-top: 3rem;
  overflow: hidden;
  width: 100vw;
`
export const BgHeader = styled.div`
  top: 0;
  left: 0;
  background: orange;
  height: 350vh;
  width: 60vw;
  z-index: 0;
  position: absolute;
  overflow: hidden;
`

const animateCircle = keyframes`
100%{transform: rotate(360deg);}
`
export const Circle = styled(motion.div)`
  height: 13rem;
  width: 13rem;
  position: absolute;
  right: 3rem;
  top: 0;
  img {
    animation: ${animateCircle} 15s linear infinite;
  }
`
