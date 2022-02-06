import { useEffect, useState } from "react";
import { Botones, StyledReturn, DetailContainer, StyledImage, InfoContainer } from "./Style";
import { useParams } from "react-router";
import { data } from "../../utils/Data";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail() {
  const { idItem } = useParams();
  const [details, setDetails] = useState({});
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (cantidad) => {
    alert(`Seleccionaste ${cantidad} tablas de 🏂 \nMarca ${details.marca}\nPor un total de U$S ${details.precio * cantidad} 💸`);
    setItemCount(cantidad);
  }


  useEffect(() => {
    let item = data.find((item) => item.id === +idItem);
    setDetails(item)
  }, [idItem]);

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
        { itemCount === 0
        ? <ItemCount stock={details.stock} initial={1} onAdd={onAdd} />
        : <Link to='/cart'><Botones>Ir al Checkout</Botones></Link>
        }
      </InfoContainer>
    </DetailContainer>
  );
}
