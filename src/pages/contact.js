import React, { useEffect, useRef } from "react"
import { TransitionLayer } from "../components/Styles/GlobalStyle"
import { gsap } from "gsap"
import Layout from "../components/layout"
import { Container, Flex } from "../components/Styles/GlobalStyle"
import {
  ContactContainer,
  Input,
  ContactUs,
} from "../components/Styles/ContactStyle"

const Contact = () => {
  const transitionRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      gsap.to(transitionRef.current, 0.5, { y: "-100%" })
    }, 600)
  })
  return (
    <>
      <TransitionLayer ref={transitionRef} blue />
      <Layout>
        <Container>
          <ContactContainer>
            <ContactUs>
              <h1>Contact Us</h1>
              <div className="form">
                <form>
                  <Input>
                    <input type="text" placeholder="Name" />
                  </Input>
                  <Input>
                    <input type="text" placeholder="Email" />
                  </Input>
                  <Input>
                    <textarea type="text" placeholder="Notes" />
                  </Input>
                  <button>Submit</button>
                </form>
              </div>
            </ContactUs>
          </ContactContainer>
        </Container>
      </Layout>
    </>
  )
}
export default Contact
