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
  display:flex;
  align-items: center;
  padding: 10px;  
  font-size: 1rem;
  color: #494949;
  margin-right: 30px;
  text-decoration: none;
  text-transform: Uppercase;
  letter-spacing: 2px;
  cursor:pointer;
  &:hover {
    color: #181818;
  }
`
const StyledCart = styled.p`
  padding-left: 15px;
`

export { Menu, Logo, NavBar, StyledLink, StyledCart };