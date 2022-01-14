import React from 'react'
import { Menu, Logo, NavBar, Link } from './style'
import logo from './logo.png';

const Header = () => {
    return (
        <Menu>
            <Logo src={logo}/>
            <NavBar>
                <Link to='#'>Lanzamientos</Link>
                <Link to='#'>Tablas</Link>
                <Link to='#'>Ofertas</Link>
                <Link to='#'>Contacto</Link>
                <Link to='#'>Carrito</Link>
            </NavBar>
        </Menu>
    )
}

export default Header
