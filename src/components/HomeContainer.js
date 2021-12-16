import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
    Container,
    Text,
    Image,
    BasicButton,
    Box,
} from '../styles/homeStyle';

function HomeContainer() {
    return (
        <Container>
            <Text>
                <h2>PROVA<br/>
                <span>CHEGANDO?</span></h2>
                <p>
                    Quer uma luz? Então, receba :)
                </p>
                <Box>
                    <BasicButton>Visualizar provas</BasicButton>
                    <Link to='/send-test'>
                        <BasicButton>Enviar uma prova</BasicButton>
                    </Link>
                </Box>
            </Text>
            <Image alt='Logo' src={logo} /> 
        </Container>
    );
}

export default HomeContainer;