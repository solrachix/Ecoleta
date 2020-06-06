import React from 'react';

import Logo from '../../assets/logo.svg';
import LogoDark from '../../assets/logo-dark.svg';
import { Container, Sun } from './styles';

import { LightTheme, DarkTheme } from '../../styles/themes/Themes';

import { Types } from '../../styles/themes/Types';

interface Props {
  theme: {
    theme: Types,
    setTheme: Function
  }
}
const Header = (props: Props) => {
  const { theme, setTheme } = props.theme;

  function handleSetTheme(){
    setTheme(theme.title === "Dark" ? LightTheme : DarkTheme)
  }

  return (
    <Container>
      <img src={theme.title === "Dark" ? LogoDark : Logo} alt="Ecoleta" />
      
      <Sun size={20} onClick={handleSetTheme} />
    </Container>
  );
}

export default Header;