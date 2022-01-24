import { useState, useEffect } from "react";
import { Botones } from './style'
const ItemCount = ({ initial = 1 }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial)
    }, []);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
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