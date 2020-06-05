import styled, { css } from 'styled-components/native';
import { rgba } from 'polished'
import Constants from "expo-constants";

import MapView, { Marker } from "react-native-maps";

interface ItemProps {
    selected?: boolean;
}

export const Container = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-top: ${20 + Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'Ubuntu_700Bold';
    margin-top: 24px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    margin-top: 4px;
    font-family: 'Roboto_400Regular';
`;

export const MapContainer = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 16px;

    border-radius: 10px;
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const MapMarker = styled(Marker)`
    width: 90px;
    height: 80px; 
`;

export const MapMarkerContainer = styled.View`
    width: 90px;
    height: 70px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const MapMarkerImage = styled.Image`
    width: 90px;
    height: 45px;
    resize-mode: cover;
`;

export const MapMarkerTitle = styled.Text`
    flex: 1;

    font-family: 'Roboto_400Regular';
    font-size: 13px;    
    color: ${({ theme }) => theme.colors.secundary};
    line-height: 23px;
`;

export const ItemsContainer = styled.View`
    margin-top: 16px;
    margin-bottom: 32px;  

    flex-direction: row;
`;

export const Item = styled.TouchableOpacity<ItemProps>`
    height: 120px;
    width: 120px;
    /* padding-left: 16px; */
    padding-top: 20px;
    padding-bottom: 16px;
    margin-right: 8px;

    border-width: 2px;
    border-radius: 8px;
  ${({ selected, theme }) =>
    selected ?
    css`
      border-color: ${theme.colors.primary};
      background-color: ${rgba(theme.colors.primary, .2)};
      /* #e1faec */
    ` : css`
        border-color: ${theme.colors.secundary};
        background-color: ${theme.colors.secundary};
    `}

    justify-content: space-between;
    align-items: center;

    text-align: center;
`;

export const ItemTitle = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 13px;  
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
`;