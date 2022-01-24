import { data } from './data'
import { CardContainer, Card } from './style'

export default function Cards() {
    return (
        <CardContainer>
            {data.map(({ id, nombre, marca, precio, stock }) =>
                <Card>
                    <div key={id}>{nombre}</div>
                    <div>{marca}</div>
                    <div>$ {precio}</div>
                    <div>{stock}</div>
                </Card>
            )}
        </CardContainer>
    )
}
