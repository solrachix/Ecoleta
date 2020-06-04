import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';

const Home = () => {
    return (
        <Container>
            <Content>
                <h1>Seu marketplace de coleta de resíduos.</h1>
                <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                <Link to="/create-point">
                    <span>
                        <FiLogIn />
                    </span>
                    <strong>Cadastrar um ponto de coleta</strong>
                </Link>
            </Content>
        </Container>
    )
}

export default Home;
