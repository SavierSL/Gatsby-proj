import React, { useEffect } from "react"
import { Container, Imagebox } from "../Styles/GlobalStyle"
import {
  HomeContentContainer,
  ImageContainer,
  Border,
} from "../Styles/HomeContentstyle"
import imageOne from "../../assets/images/1.jpg"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import { useGlobalStateContext } from "../Context/GlobalContext"
import { motion } from "framer-motion"

const HomeContent = ({ onCursor }) => {
  const { movieData } = useGlobalStateContext()
  const animation = useAnimation()
  const animation2 = useAnimation()
  const imagePath = "https://image.tmdb.org/t/p/original"
  const [refContent, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })
  const [refContent2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    console.log(inView)
    if (inView) {
      animation.start("visible")
    }
    if (inView2) {
      animation2.start("visible")
    }
  }, [inView, animation, animation2, inView2])
  console.log(movieData)
  return (
    <HomeContentContainer>
      <Container>
        <h1>
          {movieData === null
            ? ""
            : movieData.genres.map(genre => {
                return genre.name
              })}
        </h1>
        <ImageContainer
          key="1"
          ref={refContent}
          animate={animation}
          initial="hidden"
          variants={{
            hidden: {
              x: 160,
              opacity: 0,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            },
          }}
          spaceBetween
        >
          <p style={{ lineHeight: "1.5rem" }}>
            <h2> {movieData === null ? "" : movieData.title}</h2>
            {movieData === null ? "" : movieData.overview}
            <h3>Movie Link</h3>
          </p>
          <Imagebox>
            <motion.img
              src={movieData === null ? "" : imagePath + movieData.poster_path}
            />
          </Imagebox>
          <Border
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("pointer")}
          ></Border>
        </ImageContainer>
        <ImageContainer
          key="2"
          ref={refContent2}
          animate={animation2}
          initial="hidden"
          variants={{
            hidden: {
              x: -160,
              opacity: 0,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            },
          }}
          spaceBetween
        >
          <p
            style={{
              lineHeight: "1.5rem",
              position: "absolute",
              marginLeft: "3rem",
            }}
          >
            <h2>500 Days of Summer</h2>
            The film is presented in a nonlinear narrative, jumping between
            various days within the 500 days of Tom and Summer's relationship.
            There is an on-screen timer showing the day. The following is a
            linear summary of the plot.
            <h3>Movie Link</h3>
          </p>

          <motion.img
            style={{ height: "45rem", width: "120rem" }}
            src={imageOne}
          />
          <Border
            style={{ height: "40rem", width: "125rem" }}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor("pointer")}
          ></Border>
        </ImageContainer>
      </Container>
    </HomeContentContainer>
  )
}

export default HomeContent
