import {  Outlet } from "react-router-dom";
import { CardContainer, Card, Image, StyledLink } from './style'
import { data } from '../../utils/data'

const Cards = () => {

    return (
        <CardContainer>
            {data.map(({ id, imagen, nombre, marca, precio, categoria, stock }) =>
                <Card key={id}>
                    <StyledLink
                        to={`/item/${id}`}
                        key={id}>
                        <Image src={`../assets/boards/${imagen}`} alt={nombre} />
                        <div>{nombre}</div>
                        <div>{marca}</div>
                        <div>u$s {precio}</div>
                        <div>Tipo de tabla: {categoria}</div>
                        <div>Stock: {stock}</div>
                    </StyledLink>
                </Card>
            )}
            <Outlet />
        </CardContainer>
    )
}
export default Cards;
