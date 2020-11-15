import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const HomeContentContainer = styled.div`
  height: 100%;
  width: 100vw;
  background: ${props => props.theme.text};
  h1 {
    margin-top: 0;
    padding-top: 5rem;
    font-size: 5rem;
    font-weight: 100;
    left: 0;

    color: ${props => props.theme.background};
  }
`
export const ImageContainer = styled(motion.div)`
  height: 48em;
  dispay: block;
  display: flex;
  align-items: center;
  position: relative;
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
  p {
    color: ${props => props.theme.background};
    width: 20rem;
  }
`
export const Border = styled.div`
  border: solid 0.7rem orange;
  height: 40rem;
  width: 30rem;
  position: absolute;
  right: 1rem;
  top: 3rem;
`
