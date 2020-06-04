import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 46px 20px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 32px;
  max-width: 300px;
  color: #322153;
  margin-top: 24px;
`;

export const PointImage = styled.Image`
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  font-family: 'Ubuntu_700Bold';
  margin-top: 16px;
  font-size: 24px;
  color: #322153;
`;

export const PointItems = styled.Text`
  font-family: 'Roboto_500Medium';
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AddressContainer = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  color: #322153;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;

export const AddressContent = styled.Text`
  font-family: 'Roboto_400Regular';
  line-height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-color: #999;
  padding: 20px 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;