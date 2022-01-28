import { useState, useEffect } from "react";
import { Botones } from './style'
const ItemCount = ({ stock = 9, initial = 1 }) => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(initial)
    }, [initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count >= 2) {
            setCount(count - 1);
        };
    }
    return (
        <div>
            <Botones onClick={decrement}>-</Botones>
            <span>{count}</span>
            <Botones onClick={increment}>+</Botones>
            <Botones type="submit">Agregar al carrito 🛒</Botones>
        </div>
    );
};

export default ItemCount;