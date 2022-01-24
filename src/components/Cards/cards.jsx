import { data } from './data'
import ItemCount from './itemCount'
import { CardContainer, Card, Image } from './style'

export default function Cards() {
    return (
        <CardContainer>
            {data.map(({ id, imagen, nombre, marca, precio, stock }) =>
                <Card key={id}>
                    <Image src={imagen} alt={nombre} />
                    <div>{nombre}</div>
                    <div>{marca}</div>
                    <div>u$s {precio}</div>
                    <div>Stock: {stock}</div>
                    <ItemCount />
                </Card>
            )}
        </CardContainer>
    )
}
