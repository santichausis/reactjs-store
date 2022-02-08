import styled from 'styled-components'

const FooterContainer = styled.footer`
    background: black;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-size: .9rem;
    color: white;
`
export { FooterContainer, Text };