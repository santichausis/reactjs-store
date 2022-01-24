import { Menu, Logo, NavBar, Link, CartProducts } from './style'
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const randomProducts = (Math.random() * (10 - 1 + 1) ) << 1

const Header = () => {
    return (
        <Menu>
            <Logo src={logo} alt='Imagen del logo' />
            <NavBar>
                <Link to='#'>Lanzamientos</Link>
                <Link to='#'>Ofertas</Link>
                <Link to='#'>Contacto</Link>
                <FaShoppingCart />
                <CartProducts>{randomProducts}</CartProducts>
            </NavBar>
        </Menu>
    )
}

export default Header
