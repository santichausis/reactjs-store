import styled from 'styled-components'

const CardContainer = styled.section`
    display: flex;
    justify-content: space-around;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    border-radius: 10px;
    width: 275px;
    margin-bottom: 5px;
`
export { CardContainer, Card, Image };