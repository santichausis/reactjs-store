import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartContainer, CartImage, CartProduct, DeleteProduct } from '../Style';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/FirebaseConfig';

const Cart = () => {
    const cart = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = cart.cartList.map(item => ({
            idItem: item.id,
            nombre: item.nameItem,
            precio: item.precio
        }));

        cart.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'data', item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.cantidadItem)
            });
        });

        let order = {
            total: cart.calcTotal(),
            items: itemsForDB,
            date: serverTimestamp()
        };

        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert('Orden procesada correctamente 🎫. Número de orden: ' + result.id + '\n\n'))
        cart.removeList();

    }

    return (
        <CartContainer>
            <>
                <Link to='/'><DeleteProduct>Seguir comprando</DeleteProduct></Link>
                {(cart.cartList.length > 0)
                    ? <DeleteProduct type='filled' onClick={cart.removeList}>Eliminar todos los productos</DeleteProduct>
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
                            <DeleteProduct type='filled' onClick={() => cart.deleteItem(item.idItem)}>Eliminar</DeleteProduct>
                        </div>
                    </CartProduct>
                ))}
            </>
            <>
                {
                    cart.cartList.length > 0 &&
                    <div>
                        <h3>Resumen de compra</h3>
                        <div>
                            <p>Subtotal</p>
                            <p>{cart.calcSubTotal()}</p>
                        </div>
                        <div type='total'>
                            <p>Total</p>
                            <p>{cart.calcTotal()}</p>
                        </div>
                        <buttom onClick={createOrder}>ORDENAR 💳</buttom>
                    </div>
                }
            </>
        </CartContainer>
    );
};

export default Cart;