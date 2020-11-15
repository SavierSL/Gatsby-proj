import React, { useEffect, useRef } from "react"
import { Container } from "../components/Styles/GlobalStyle"
import {
  Title,
  TitleContainer,
  Line,
  LayerBlack,
  LayerWhite,
  HeaderContent,
  LineContainer,
  HeaderContainer,
  BgHeader,
  Circle,
} from "../components/Styles/HeaderStyle"
import { useGlobalStateContext } from "../components/Context/GlobalContext"
import gsap from "gsap"
import CircleImage from "../assets/images/circle.png"
import { motion } from "framer-motion"

const Header = () => {
  const { currentTheme } = useGlobalStateContext()
  const titleAnimate1 = useRef(null)
  const titleAnimate2 = useRef(null)
  const blackLayer = useRef(null)

  useEffect(() => {
    gsap.to(titleAnimate1.current, 0.9, {
      y: 0,

      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    })
    setTimeout(() => {
      gsap.to(titleAnimate2.current, 0.9, {
        y: 0,

        transition: {
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      })
    }, 400)
    setTimeout(() => {
      gsap.to(blackLayer.current, 0.7, {
        x: "100%",

        display: "none",
        transition: {
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      })
    }, 1100)

    window.localStorage.setItem("theme", currentTheme)
    console.log(window.localStorage)
  }, [])
  console.log(currentTheme)
  return (
    <>
      <BgHeader />
      <HeaderContainer>
        <Container>
          <Line>
            <Title ref={titleAnimate1}>We</Title>
          </Line>
          <Line>
            <Title ref={titleAnimate2}>Create</Title>
          </Line>
          <Circle>
            <img src={CircleImage} />
          </Circle>
        </Container>
        <HeaderContent>
          <LayerBlack ref={blackLayer}></LayerBlack>
          <LayerWhite>
            <Container>
              <h1>High Q. films</h1>
              <h2>Welcome //</h2>
              <h4>Capturing Life’s Moments</h4>
            </Container>
          </LayerWhite>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

export default Header
