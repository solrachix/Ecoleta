import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';

import {
  Container,
  ButtonBack,
  PointImage,
  PointName,
  PointItems,
  AddressContainer,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  ButtonText,
} from './styles';

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setData(response.data);
    });
  }, [routeParams.point_id]);

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  function handleComposeMail(): void {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [data.point.email],
    });
  }

  function handleWhatsApp(): void {
    Linking.openURL(
      `whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`,
    );
  }

  if (!data.point) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ButtonBack onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={24} color="#34cb79" />
        </ButtonBack>

        <PointImage
          style={{ resizeMode: 'cover', width: '100%', height: 120 }}
          source={{
            uri: data.point.image_url,
          }}
        />

        <PointName>{data.point.name}</PointName>
        <PointItems>{data.items.map(item => item.title).join(', ')}</PointItems>

        <AddressContainer>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>
            {data.point.city}, {data.point.uf}
          </AddressContent>
        </AddressContainer>
      </Container>
      <Footer>
        <Button onPress={handleWhatsApp}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>

        <Button onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#fff" />
          <ButtonText>Email</ButtonText>
        </Button>
      </Footer>
    </SafeAreaView>
  );
};

export default Detail;