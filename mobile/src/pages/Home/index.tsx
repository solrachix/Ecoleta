import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Feather as Icon } from "@expo/vector-icons";
import { Container, Main, Title, Description, Footer, Button, ButtonIcon, ButtonText, Input } from './styles';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleNavigateToPoints = useCallback(() => {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }, [navigation, city, uf]);

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container 
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
      >
        <Main>
          <Image source={require('../../assets/logo.png')} />
          <Title 
            text="Seu marketplace de coleta de residuos"
            color="#322153"
            size={32}
          />
          {/* <Title>Seu marketplace de coleta de residuos</Title> */}
          <Description
            text="Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente."
            color="#6C6C80"
            size={16}
          />
        </Main>

        <Footer>
          <Input
            placeholder="Digite a UF"
            value={uf}
            autoCapitalize="characters"
            maxLength={2}
            autoCorrect={false}
            onChangeText={setUf}
          />
          <Input
            placeholder="Digite a Cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
          />

          <Button onPress={handleNavigateToPoints}>
            <ButtonIcon>            
              <Icon name="arrow-right" color="#FFF" size={24} />
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>

      </Container>
    </KeyboardAvoidingView>
  )
}

export default Home;


// import React from 'react';

// import { Container } from './styles';

// const Home = () => {
//   return(
//     <Container>
      
//     </Container>
//   )
// }

// export default Home;