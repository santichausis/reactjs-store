import { CardContainer, Card, Image } from './style'
import ItemCount from './ItemCount'
import { data } from '../../utils/data'

export default function Cards() {

    return (
        <CardContainer>
            {data.map(({ id, imagen, nombre, marca, precio, categoria, stock }) =>
                <Card key={id}>
                    <Image src={`../assets/boards/${imagen}`} alt={nombre} />
                    <div>{nombre}</div>
                    <div>{marca}</div>
                    <div>u$s {precio}</div>
                    <div>Tipo de tabla: {categoria}</div>
                    <div>Stock: {stock}</div>
                    <ItemCount />
                </Card>
            )}
        </CardContainer>
    )
}
