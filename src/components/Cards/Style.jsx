import { Link } from 'react-router-dom';
import { Return } from '../Return/Return';
import styled from 'styled-components'

const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    width: 1140px;
    margin: 0 auto;
`
const Card = styled.div`
    width: 275px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(255, 255, 255) 0.2em solid;
    :hover{
        border: #dadada 0.2em solid;
    }
`
const Image = styled.img`
    border-radius: 10px;
    width: 275px;
    margin-bottom: 10px;
`
const StyledLink = styled(Link)`
  color: #2b2a2a;
  text-decoration: none;
`
const CardTitle = styled.h3`
    text-align: center;
    text-transform: uppercase;
`
const CardBrand = styled.h4`
    padding-left: 20px;
`
const CardPrice = styled.p`
    padding-left: 20px;
    font-size: 20px;
`
const CardCategory = styled.p`
    padding-left: 20px;
    font-size: 14px;
    text-transform: uppercase;
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
const DetailContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-rows: 80px 2fr 1fr;
    width: 1140px;
    margin: 0 auto;
`
const StyledReturn = styled(Return)`
    grid-column-start: 1;
    grid-column-end: 5;
`
const StyledSpanReturn = styled(Link)`
    width: 120px;
    margin: 20px 0;
    padding: 5px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
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
const StyledImage = styled.img`
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 10px;
    width: 475px;
`
const InfoContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 5;
`

export { CardContainer, Card, Image, Botones, StyledLink, CardTitle, CardBrand, CardPrice, CardCategory, DetailContainer, StyledReturn, StyledSpanReturn, StyledImage, InfoContainer };