import styled from 'styled-components'

const Menu = styled.header`
  display: grid;
  grid-template-columns: 250px 1fr;
`
const Logo = styled.img`
  width:250px;
`
const NavBar = styled.nav`
  display: flex;
  align-self: center;
  justify-content: center;
`
const Link = styled.a`
  font-size: 1rem;
  color: #494949;
  margin-right: 30px;
  text-transform: Uppercase;
  cursor:pointer;
`
export { Menu, Logo, NavBar, Link };