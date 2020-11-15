import styled from "styled-components"

export const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  h1 {
    color: ${props => props.theme.text};
  }
  input {
    border: solid ${props => props.theme.text} 2px;
    border-radius: 1.5rem;
    width: 20rem;
    padding: 5px;
    background: white;
    &:focus {
      outline: none;
    }
  }
  textarea {
    border: solid ${props => props.theme.text} 2px;
    border-radius: 0.5rem;
    resize: none;
    height: 5rem;
    width: 20rem;
    padding: 5px;
    background: white;
    &:focus {
      outline: none;
    }
  }
  button {
    color: ${props => props.theme.background};
    background: ${props => props.theme.text};
    padding: 0.6rem;
    width: 9rem;
    left: 0;
    right: 0;
    position: absolute;
    margin: 1rem auto;
    border-radius: 1rem;
    &:hover {
      background: ${props => props.theme.background};
      color: ${props => props.theme.text};
      transition: 0.5s;
    }
  }
`
export const Input = styled.div`
  display: block;
  margin-top: 1rem;
`
export const ContactUs = styled.div`
  height: 100%;
  width: 20rem;
  margin: 5rem auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
