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
            setCartList([
                ...cartList
            ]);
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

    function calcTotalPerItem(idItem) {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].precio * cartList[index].cantidadItem;
    }

    const calcTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcItemsQuanty = () => {
        let quanty = cartList.map(item => item.cantidadItem);
        return quanty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            itemCantidad,
            calcTotalPerItem,
            calcTotal,
            calcItemsQuanty
        }}>
            {children}
        </CartContext.Provider>);
};

export default CartContextProvider;