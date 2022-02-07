import { useState, useEffect } from "react";
import { Botones } from './Style'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count >= initial) {
            setCount(count - 1);
        };
    }
    return (
        <div>
            <Botones onClick={decrement}>-</Botones>
            <span>{count}</span>
            <Botones onClick={increment}>+</Botones>
            {
                stock
                ? <Botones onClick={() => onAdd(count)}>Agregar al carrito 🛒</Botones>
                : <Botones disabled>Agregar al carrito 🛒</Botones>
            }
        </div>
    );
};

export default ItemCount;