import { useParams } from "react-router";
import { data } from '../../utils/data'

export default function ItemDetail() {
    const params = useParams();
    const tablas = data((params.idItem));

    return (
        <div>
            <h1>{tablas.nombre}</h1>
        </div>
    );
}
