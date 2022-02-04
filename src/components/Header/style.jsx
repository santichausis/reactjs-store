import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`
const Logo = styled.img`
  width:250px;
  cursor: pointer;
`
const NavBar = styled.nav`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  padding: 0 10px;  
  font-size: 1rem;
  color: #494949;
  margin-right: 30px;
  text-decoration: none;
  text-transform: Uppercase;
  letter-spacing: 1px;
  cursor:pointer;
  &:hover {
    color: #181818;
  }
`
const CartProducts = styled.p`
  position: relative;
  top: -15px;
  right: -10px
`
export { Menu, Logo, NavBar, StyledLink, CartProducts };