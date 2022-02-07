import { FooterContainer, Text } from './Style';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterContainer>
            <Text>Hecho por Santiago Chausis {year} 🚀</Text>
        </FooterContainer>
    );
};

export default Footer;