import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Logo, NavBar, StyledLink, StyledCart } from './Style'
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const Header = () => {

    const cart = useContext(CartContext);

    return (
        <Menu>
            <Link to='/'>
                <Logo src={logo} alt='Imagen del logo' />
            </Link>
            <NavBar>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/cart'>Carrito</StyledLink>
                <StyledLink to='/cart'>
                    <FaShoppingCart />
                    <StyledCart>{cart.itemCantidad()}</StyledCart>
                </StyledLink>
            </NavBar>
        </Menu>
    )
}

export default Header
