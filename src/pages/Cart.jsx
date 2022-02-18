import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartContainer, CartImage, CartProduct, DeleteProduct } from '../Style';
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useContext(CartContext);

    return (
        <CartContainer>
            <>
                <Link to='/'><DeleteProduct>Seguir comprando</DeleteProduct></Link>
                {(cart.cartList.length > 0)
                    ? <DeleteProduct type="filled" onClick={cart.removeList}>Eliminar todos los productos</DeleteProduct>
                    : <h2>El carrito esta vacio</h2>
                }
            </>
            <>
                {cart.cartList.map(item => (
                    <CartProduct key={item.idItem}>
                        <CartImage src={`../../assets/boards/${item.imagen}`} alt={item.nombre} />
                        <div>
                            <p>{item.nombre}</p>
                            <p>U$S {item.precio}</p>
                            <p>Cantidad: {item.cantidadItem}</p>
                            <p>Total: U$S {`${(item.cantidadItem) * (item.precio)}`}</p>
                            <DeleteProduct type="filled" onClick={() => cart.deleteItem(item.idItem)}>Eliminar</DeleteProduct>
                        </div>
                    </CartProduct>
                ))}
            </>
        </CartContainer>
    );
};

export default Cart;