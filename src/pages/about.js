import React, { useEffect, useRef, useState } from "react"
import { TransitionLayer } from "../components/Styles/GlobalStyle"
import { Link } from "gatsby"
import {
  AboutContainer,
  AboutContent,
  ImageContainer,
  First,
  Last,
  SinceContainer,
  Since,
  AboutDetails,
  TextContainer,
  ImageContainer2,
  ImageLayer,
} from "../components/Styles/AboutStyle"
import { gsap } from "gsap"
import { Container, Flex } from "../components/Styles/GlobalStyle"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Navigation from "../components/Home/Navigation"
import { useGlobalDispatchContext } from "../components/Context/GlobalContext"
import CustomCursor from "../components/Cursor/CustomCursor"
import Layout from "../components/layout"
import ProductionImage from "../assets/images/production.jpg"
import ProductionImage2 from "../assets/images/production2.jpg"
import {
  useAnimation,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [refDetails, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-340px",
  })
  const [refImageLayer, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const animate = useAnimation()
  const animateDetails = useAnimation()
  const animateImageLayer = useAnimation()
  const [load, setLoad] = useState(false)
  const transitionRef = useRef(null)

  const first = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  }

  const letter = {
    initial: {
      opacity: 0,
      y: 400,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      animateDetails.start("visible")
    }
    if (inView2) {
      animateImageLayer.start("animate")
    }
    setTimeout(() => {
      setLoad(true)
    }, 600)

    setTimeout(() => {
      gsap.to(transitionRef.current, 0.5, {
        y: "-100%",
        transition: { delay: 0.6 },
      })
    }, 600)

    if (load) {
      animate.start("animate")
    }
  }, [animate, load, animateDetails, inView, inView2, animateImageLayer])

  return (
    <>
      <TransitionLayer ref={transitionRef} />
      <Layout>
        <AboutContainer>
          <SinceContainer>
            <Since
              initial={{ y: 100 }}
              animate={animate}
              variants={{
                animate: {
                  y: 0,
                  transition: {
                    delay: 1,
                    duration: 1.2,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
            >
              <Flex spaceBetween>
                <h4>Bojour</h4>
                <h4>2015-2020</h4>
              </Flex>
            </Since>
          </SinceContainer>
          <AboutContent>
            <First initial="initial" animate={animate} variants={first}>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                A
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                b
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                o
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                u
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                t
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                {" "}
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                F
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                i
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                l
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                m
              </motion.span>
              <motion.span
                initial="initial"
                animate={animate}
                variants={letter}
              >
                a
              </motion.span>
            </First>
          </AboutContent>

          <ImageContainer
            initial="initial"
            animate={animate}
            variants={{
              initial: {
                y: 0,
                width: "50rem",
              },
              animate: {
                y: 200,
                width: "100vw",
                transition: {
                  delay: 0.2,
                  duration: 1.1,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
            }}
          >
            {" "}
            <TextContainer>
              <h1>We Make Everything Possible We Make Everything Possible</h1>
            </TextContainer>
            <motion.img
              initial={{ width: "100%", scale: 1, y: "0%" }}
              animate={animate}
              variants={{
                animate: {
                  y: "-50%",
                  transition: {
                    delay: 0.18,
                    duration: 1.2,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
              src={ProductionImage}
              style={{ scale: scale }}
            />
          </ImageContainer>
          <AboutDetails
            ref={refDetails}
            initial="hidden"
            animate={animateDetails}
            variants={{
              hidden: {
                scale: 1,
                y: -80,
                opacity: 0,
              },
              visible: {
                scale: 1.2,
                y: 5,
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
            }}
          >
            <Flex spaceBetween>
              <h1>Filma</h1>
              <p>
                With the goal of showcasing, supporting, educating and
                connecting emerging filmmakers, NFMLA rapidly expanded to become
                much more than a monthly film festival. NFMLA regularly partners
                with organizations, companies, and film schools such as the
                Producer’s Guild of America (PGA), International Documentary
                Association (IDA), Sundance Institute, Toronto International
                Film Festival (TIFF), Film Independent, Women in Film, Disney,
                Sony, DreamWorks, The Hollywood Foreign Press Association (HFPA
                | Golden Globes).
              </p>
            </Flex>
          </AboutDetails>
          <ImageContainer2>
            <ImageLayer
              ref={refImageLayer}
              initial="initial"
              animate={animateImageLayer}
              variants={{
                initial: {
                  width: "100%",
                },
                animate: {
                  width: "0",
                  transition: {
                    duration: 1.5,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
            />
            <motion.h1
              ref={refImageLayer}
              initial="initial"
              animate={animateImageLayer}
              variants={{
                initial: {
                  y: 100,
                },
                animate: {
                  y: 0,
                  transition: {
                    duration: 1.6,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
            >
              Capturing Life's Moments
            </motion.h1>
            <img src={ProductionImage2} />
          </ImageContainer2>
          <h4 style={{ color: "white" }}>
            FANTASY | SCI FI | DRAMA | SPORTS | HISTORY | ACTION | HORROR
          </h4>
        </AboutContainer>
      </Layout>
    </>
  )
}

export default About
