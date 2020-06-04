import React from 'react';
import { TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { SvgUri } from "react-native-svg";

import { Feather as Icon } from "@expo/vector-icons";
import { 
  Container,
  Title,
  Description,
  MapContainer,
  Map,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
  ItemsContainer,
  Item,
  SelectedItem,
  ItemTitle
} from './styles';

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate("Detail");
  }
  return(
    <>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79"></Icon>
        </TouchableOpacity>

        <Title>Bem vindo.</Title>
        <Description>
          Encontre no mapa um ponto de coleta.
        </Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: -4.4921427,
              longitude: -38.6005319,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <MapMarker
              onPress={handleNavigateToDetail}
              coordinate={{
                latitude: -4.4921427,
                longitude: -38.6005319,
              }}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1540661116512-12e516d30ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
                  }}
                />
                <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>

      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        >
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri={"http://192.168.11.4:3333/uploads/oleo.svg"}
            />
            <ItemTitle>Óleo de Cozinha</ItemTitle>
          </Item>
        </ScrollView>
      </ItemsContainer>
  </>
  )
}

export default Points;