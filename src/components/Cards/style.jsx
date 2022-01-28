import styled from 'styled-components'

const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 1140px;
    margin: 0 auto;
    heigth: auto;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`
const Image = styled.img`
    border-radius: 10px;
    width: 250px;
    margin-bottom: 5px;
`
const Botones = styled.button`
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
}
:active {
 transform: scale(0.9);
}
`


export { CardContainer, Card, Image, Botones };