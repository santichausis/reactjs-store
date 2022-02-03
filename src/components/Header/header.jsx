import { BrowserRouter, NavLink } from "react-router-dom";
import { Menu, Logo, NavBar, CartProducts, Links } from './style'
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const randomProducts = (Math.random() * (10 - 1 + 1)) << 1

const Header = () => {
    return (
        <Menu>
            <BrowserRouter>
                <NavLink to='/'>
                    <Logo src={logo} alt='Imagen del logo' />
                </NavLink>
            </BrowserRouter>
            <NavBar>
                <Links>Lanzamientos</Links>
                <Links>Ofertas</Links>
                <Links>Contacto</Links>
                <FaShoppingCart />
                <CartProducts>{randomProducts}</CartProducts>
            </NavBar>
        </Menu>
    )
}

export default Header
