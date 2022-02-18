import { Outlet } from 'react-router-dom';
import { CardContainer, Card, Image, StyledLink, CardTitle, CardBrand, CardPrice, CardCategory } from './Style'
import { useEffect, useState } from 'react'
import { firestoreFetch } from '../../utils/FirebaseFetch';
const Cards = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        firestoreFetch()
            .then(result => setDatos(result))
    }, [datos]);

    return (
        <CardContainer>
            {datos.map(({ id, imagen, nombre, marca, precio, categoria }) =>
                <Card key={id}>
                    <StyledLink
                        to={`/item/${id}`}
                    >
                        <Image src={`../assets/boards/${imagen}`} alt={nombre} />
                        <CardTitle>{nombre}</CardTitle>
                        <CardBrand>{marca}</CardBrand>
                        <CardPrice>u$s {precio}</CardPrice>
                        <CardCategory>Tabla: {categoria}</CardCategory>
                    </StyledLink>
                </Card>
            )}
            <Outlet />
        </CardContainer>
    )
}
export default Cards;
