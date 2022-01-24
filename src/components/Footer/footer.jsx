import { FooterContainer, Text } from './style';

const year = new Date().getFullYear();

const Footer = ({nombre}) => {
    return (
        <FooterContainer>
            <Text>Hecho por {nombre} {year} 🚀</Text>
        </FooterContainer>
    );
};

export default Footer;