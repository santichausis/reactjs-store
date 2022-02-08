import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartContainer, CartImage, CartProduct } from "../Style";

const Cart = () => {
    const cart = useContext(CartContext);

    return (
        <CartContainer>
            <h1>Carrito</h1>
            {cart.cartList.map(item => (
                <CartProduct key={item.id}>
                    <CartImage src={`../../assets/boards/${item.imagen}`} alt={item.nombre} />
                    <div>
                        <p>{item.nombre}</p>
                        <p>U$S {item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Total: U$S {`${(item.cantidad) * (item.precio)}`}</p>
                        <button onClick=''>Eliminar</button>
                    </div>
                </CartProduct>
            ))}
        </CartContainer>
    );
};

export default Cart;