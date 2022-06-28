import styled, { css } from 'styled-components'


export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1280px;
  padding: 20px 25px;
  border-bottom: 3px solid #3E2089;
  @media (max-width: 1280px) {
    padding: 15px 25px;
  }
`

export const Logo = styled.div`
  transform: translateY(5px);
  cursor: pointer;
  width: 340px;
  height: 70px;
  @media (max-width: 1280px) {
    width: 240px;
    height: 50px;
  }
  @media (max-width: 370px) {
    width: 190px;
    height: 40px;
  }
`

export const NavWeb = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  gap: 80px;
  @media (max-width: 892px) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;
  flex-direction: column;
  margin-left: auto;
  gap: 30px;
  display: flex;
  right: -300px;
  top: 0px;
  position: fixed;
  background-color: #000;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  height: 100%;
  z-index: 10;
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0,0,0,0.5);
  
  ${props => props.show && `
    right: 0px;
  `}
  transition: 0.4s;
  @media (max-width: 892px) {
    display: flex;
  }
`
export const NavItem = styled.a`
  color: red;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  ${(props) => !props.selected && css`
    &::after{
      content: '';
      display: block;
      border-bottom: solid 3px green;   
      width: 0px;
      transition: width 250ms ease-in-out;
    }
          
    &:hover::after{
      width: 100%;
    }
  `}
  ${(props) => props.selected && css`
    border-bottom: solid 3px green !important; 
  `}
  @media (max-width: 1280px) {
    font-size: 1.1rem;
  }
`

export const Menu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  @media (max-width: 892px) {
    display: flex;
  }
  
`

export const BackDrop = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  ${props => props.show && `
    display: flex;
  `}
`