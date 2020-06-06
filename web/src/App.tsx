import React, { useState } from 'react';
// import ButterToast, { POS_TOP, POS_RIGHT } from 'butter-toast';
import { ThemeProvider } from './styles/styled-components';
import GlobalStyle from './styles/GlobalStyle'

import Routes from './routes';

import Header from './components/Header';
import { LightTheme } from './styles/themes/Themes';
import { Container } from './styles/App';

function App() {
  const [ theme, setTheme ] = useState(LightTheme);
  return (
    <ThemeProvider theme={theme}>
      {/* <ButterToast position={{vertical: POS_TOP, horizontal: POS_RIGHT}}/> */}
      <GlobalStyle />
      <Container>
        <Header theme={{theme, setTheme}} />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;