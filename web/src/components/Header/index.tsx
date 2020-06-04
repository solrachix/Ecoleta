import React from 'react';

import Logo from '../../assets/logo.svg';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
        <img src={Logo} alt="Ecoleta" />
    </Container>
  );
}

export default Header;