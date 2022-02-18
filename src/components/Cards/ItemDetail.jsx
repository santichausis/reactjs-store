import { useContext, useEffect, useState } from "react";
import { Botones, StyledReturn, DetailContainer, StyledImage, InfoContainer } from "./Style";
import ItemCount from "./ItemCount";
import { Link, useParams } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { firestoreFetchOne } from "../../utils/FirebaseFetch";

export default function ItemDetail() {

  const { idItem } = useParams();
  const [details, setDetails] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const cart = useContext(CartContext);
  const onAdd = (cantidad) => {
    setItemCount(cantidad);
    cart.addToCart(details, cantidad)
  }

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then(result => setDetails(result))
      .catch(err => console.log(err))
  }, []);

  return (
    <DetailContainer>
      <StyledReturn />
      <StyledImage src={`../assets/boards/${details.imagen}`} alt={details.nombre} />
      <InfoContainer>
        <h1>{details.nombre}</h1>
        <h3>u$s {details.precio}</h3>
        <p>Tipo de tabla: {details.categoria}</p>
        <p>{details.marca}</p>
        <p>Stock: {details.stock}</p>
        {itemCount === 0
          ? <ItemCount stock={details.stock} initial={1} onAdd={onAdd} />
          : <Link to='/cart'><Botones>Ir al Checkout</Botones></Link>
        }
      </InfoContainer>
    </DetailContainer>
  );
}
