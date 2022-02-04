import { useEffect, useState } from "react";
import { StyledReturn, DetailContainer, StyledImage, InfoContainer, StyledCounter } from "./Style";
import { useParams } from "react-router";
import { data } from "../../utils/Data";
import ItemCount from "./ItemCount";

export default function ItemDetail() {
  const { idItem } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    let item = data.find((item) => item.id === +idItem);
    setDetails(item)
  }, [idItem]);

  console.log()

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
        <ItemCount />
      </InfoContainer>
    </DetailContainer>
  );
}
