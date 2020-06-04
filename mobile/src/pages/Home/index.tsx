import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Feather as Icon } from "@expo/vector-icons";
import { Container, Main, Title, Description, Footer, Button, ButtonIcon, ButtonText } from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToPoint() {
    navigation.navigate("Points");
  }

  return(
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
        <Button onPress={handleNavigateToPoint}>
          <ButtonIcon>            
            <Icon name="arrow-right" color="#FFF" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>

    </Container>
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