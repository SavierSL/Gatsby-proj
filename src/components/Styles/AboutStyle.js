import styled from "styled-components"
import { motion } from "framer-motion"
import { keyframes } from "styled-components"

export const AboutContainer = styled.div`
  width: 100vw;
  height: 250vh;
  text-align: center;
  overflow: hidden;
  margin-bottom: 5rem;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }
  p {
    line-height: 2rem;
    color: ${props => props.theme.text};
  }
`
export const AboutContent = styled.div`
  margin-top: 12rem;
  position: absolute;
  width: 100%;

  span {
    font-size: 5rem;
    padding-top: 2rem;
    color: ${props => props.theme.text};
  }
`
export const ImageContainer = styled(motion.div)`
  height: 23rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5rem;

  img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-40%);
  }
`
export const textAnimation = keyframes`
    0% {transform: translateX(0);}
    100% { transform: translateX(-45.55%);}
  }
  `

export const TextContainer = styled.div`
  height: 100%;
  width: 100vw;
  z-index: 1000;
  position: absolute;

  h1 {
    width: 290vw;
    margin: 0;
    height: 100%;
    z-index: 1000;
    font-size: 8rem;
    color: white;
    position: relative;
    margin: 6rem auto;
    margin-left: -11rem;
    animation: ${textAnimation} 12s linear infinite;
    white-space: nowrap;
  
`

export const First = styled(motion.span)``
export const Last = styled.span``
export const SinceContainer = styled.div`
  position: absolute;
  width: 50vw;
  left: 0;
  right: 0;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.text};
  }
`
export const Since = styled(motion.div)`
  width: 100%;
`
export const AboutDetails = styled(motion.div)`
  width: 75vw;
  bacgkround: red;
  margin: 0 auto;
  margin-top: 14rem;
  z-index: 20;

  h1 {
    z-index: -1;
    width: 30rem;
    text-align: center;
    color: ${props => props.theme.text};
    z-index: 20;
  }
  p {
    z-index: -1;
    text-align: left;
    width: 40rem;
    z-index: 20;
  }
`
export const ImageContainer2 = styled.div`
  height: 40rem;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  z-index: -1;
  overflow: hidden;
  img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  h1 {
    height: 3rem;
    z-index: 1;
    color: white;
    position: absolute;
    bottom: 15rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`
export const ImageLayer = styled(motion.div)`
  background: black;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 5;
`
