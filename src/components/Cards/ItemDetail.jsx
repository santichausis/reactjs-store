import { useEffect, useState } from "react";
import { StyledReturn, DetailContainer, StyledImage, InfoContainer } from "./Style";
import { useParams } from "react-router";
import { data } from "../../utils/Data";
import ItemCount from "./ItemCount";

export default function ItemDetail() {
  const { idItem } = useParams();

  const [details, setDetails] = useState({});

  const onAdd = (cantidad) => {
    alert(`Seleccionaste ${cantidad} tablas de Snowboard marca ${details.marca} por un valor total de U$S ${details.precio * cantidad}`)
  }
  const [disable, serDisable] = useState(false)

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
        <ItemCount stock={details.stock} initial={1} onAdd={onAdd} />
        <button disabled={disable} onClick={() => serDisable(true)}>Ir al Checkout</button>
      </InfoContainer>
    </DetailContainer>
  );
}
