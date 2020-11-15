import styled from "styled-components"

export const Nav = styled.div`
  background: black;
  height: 3rem;
  padding: 6px;
  @media (min-width: 400px) {
    margin-top: 1rem;
  }
  @media (min-width: 300px) {
    margin-top: 1rem;
  }
  @media (min-width: 1000px) {
    font-size: 7rem;
  }
`
export const Logo = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 100;
  @media (min-width: 400px) {
    margin-top: 1rem;
  }
  @media (min-width: 300px) {
    margin-top: 1rem;
  }
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
  span {
    color: red;
  }
`
export const Burger = styled.div`
  span {
    width: 30px;
    height: 8px;
    background: ${props => props.theme.text};
    display: block;
    margin: 8px;
  }
`
