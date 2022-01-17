import React from 'react'
import { Menu, Logo, NavBar, Link, CartProducts } from './style'
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
    return (
        <Menu>
            <Logo src={logo}/>
            <NavBar>
                <Link to='#'>Lanzamientos</Link>
                <Link to='#'>Ofertas</Link>
                <Link to='#'>Contacto</Link>
                <FaShoppingCart />
                <CartProducts>5</CartProducts>
            </NavBar>
        </Menu>
    )
}

export default Header
