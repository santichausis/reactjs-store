import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const cart = useContext(CartContext);

    return (
        <div>
            <h1>Carrito</h1>
            {cart.cartList.map(item => (
                <ul key={item}>
                    <li>{item}</li>
                </ul>
            ))}
        </div>
    );
};

export default Cart;