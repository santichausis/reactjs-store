import styled from 'styled-components'

const CartContainer = styled.section`
    width: 1140px;
    margin: 0 auto;
`
const CartProduct = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
`
const CartImage = styled.img`
    width: 200px;
    border-radius: 10px;
`

export { CartContainer, CartProduct, CartImage }