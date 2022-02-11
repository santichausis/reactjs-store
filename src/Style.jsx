import styled from 'styled-components'

const CartContainer = styled.section`
    width: 1140px;
    margin: 0 auto;
`
const DeleteProduct = styled.button`
     margin: 10px;
    padding: 5px 10px;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    color: #3b2974;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 30px;
    border: 2px solid #725AC1;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #725AC1;
    :hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725AC1;
`
const CartProduct = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    padding-top: 20px;
`
const CartImage = styled.img`
    width: 240px;
    border-radius: 10px;
`

export { CartContainer, DeleteProduct, CartProduct, CartImage }