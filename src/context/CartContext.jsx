import { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        let buscarItem = cartList.find(product => product.idItem === item.id);
        if (buscarItem === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imagen: item.imagen,
                    nombre: item.nombre,
                    precio: item.precio,
                    cantidadItem: cantidad
                }
            ]);
        } else {
            buscarItem.cantidadItem += cantidad;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let removeItem = cartList.filter(item => item.idItem !== id);
        setCartList(removeItem);
    }

    const itemCantidad = () => {
        let cantidad = cartList.map(item => item.cantidadItem);
        return cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeList, deleteItem, itemCantidad }}>
            {children}
        </CartContext.Provider>);
};

export default CartContextProvider;