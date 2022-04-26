import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const Navbar = () => (
  <NavMain>
    <div />
    <Logo src={logo} />
    <NavItems>
      <NavItem to="/">Product</NavItem>
      <NavItem to="/travel">Travel</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </NavItems>
  </NavMain>
)

const Logo = styled.img`
  height: 150px;
`

const NavMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const NavItems = styled.div`
  position: absolute;
  right: 0;
  margin: 0 3rem;
`

const NavItem = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;
`

export default Navbar
