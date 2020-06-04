import React, { useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { ThemeProvider, DefaultTheme, Types } from './src/styles/styled-components';

import Routes from './src/Routes';
// import { expo } from './app.json';

import usePersistedState from './src/utils/usePersistedState';
import { LightTheme } from './src/styles/themes/Themes';

export default function App() {
  // const [theme, setTheme] = usePersistedState<Types>('theme', LightTheme);
  const [theme, setTheme] = useState<Types>(LightTheme);
  console.log(theme);
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
      </ThemeProvider>
    );
  }
}

console.disableYellowBox = false;

// AppRegistryarn y.registerComponent('expo.name', () => App);