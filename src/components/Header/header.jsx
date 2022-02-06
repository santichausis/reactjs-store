import { Link } from "react-router-dom";
import { Menu, Logo, NavBar, CartProducts, StyledLink } from './Style'
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const randomProducts = (Math.random() * (10 - 1 + 1)) << 1

const Header = () => {
    return (
            <Menu>
                <Link to='/'>
                    <Logo src={logo} alt='Imagen del logo' />
                </Link>
                <NavBar>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to='/cart'>Carrito</StyledLink>
                    <Link to='/cart'>
                        <FaShoppingCart />
                        <CartProducts>{randomProducts}</CartProducts>
                    </Link>
                </NavBar>
            </Menu>
    )
}

export default Header
