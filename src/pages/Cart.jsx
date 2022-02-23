import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartContainer, CartImage, CartProduct, DeleteProduct } from '../Style';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/FirebaseConfig';
import FormatNumber from "../utils/FormatNumber";

const Cart = () => {
    const cart = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = cart.cartList.map(item => ({
            id: item.idItem,
            nombre: item.nombre
        }));

        cart.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'data', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.cantidadItem)
            });
        });

        let order = {
            buyer: {
                name: "Compra Prueba",
                email: "test@gmail.com",
                phone: "11303030"
            },
            total: cart.calcTotal(),
            items: itemsForDB,
        };

        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'order'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => alert('Orden procesada correctamente 🎫. Número de orden: ' + result.id + '\n\n'))
            cart.removeList();

    }

    return (
        <CartContainer>
            <div>
                <>
                    <Link to='/'><DeleteProduct>Seguir comprando</DeleteProduct></Link>
                    {(cart.cartList.length > 0)
                        ? <DeleteProduct type='filled' onClick={cart.removeList}>Eliminar todos los productos</DeleteProduct>
                        : <h2>El carrito esta vacio</h2>
                    }
                </>
                <>
                    {
                        cart.cartList.map(item => (
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
            </div>
            <div>
                {
                    cart.cartList.length > 0 &&
                    <div>
                        <h3>Resumen de compra</h3>
                        <div>
                            <p>Total</p>
                            <FormatNumber number={cart.calcTotal()} />
                        </div>
                        <DeleteProduct onClick={createOrder}>ORDENAR 💳</DeleteProduct>
                    </div>
                }
            </div>
        </CartContainer>
    );
};


export default Cart;