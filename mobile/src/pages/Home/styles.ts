import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import Text from '../../components/Text';

export const Container = styled.ImageBackground`
    flex: 1;
    padding: 32px;

    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const Main  = styled.View`
    flex: 1px;
    justify-content: center;
`;

export const Title  = styled(Text)`
    max-width: 260px;
    margin-top: 64px;

    /* color: #322153;
    font-size: 32px; */
    font-family: "Ubuntu_700Bold";
`;

export const Description  = styled(Text)`
    max-width: 260px;
    margin-top: 16px;

    /* color: ${({ theme }) => theme.colors.text};

    font-size: 16px; */
    font-family: "Roboto_400Regular";
    line-height: 24px;
`;

export const Footer  = styled.View`

`;

export const Select  = styled.View`

`;

export const Input  = styled.TextInput`
    height: 60px;
    margin-bottom: 8px;
    /* padding-horizontal: 24px; */

    background-color: ${({ theme }) => theme.colors.secundary};
    border-radius: 10px;
    font-size: 16px;
`;

export const Button  = styled(RectButton)`
    height: 60px;
    margin-top: 8px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;

    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const ButtonIcon  = styled.View`
    height: 60px;
    width: 60px;

    background-color: rgba(0, 0, 0, 0.1);

    justify-content: center;
    align-items: center;
`;

export const ButtonText  = styled.Text`
    flex: 1;

    color: ${({ theme }) => theme.colors.secundary};
    font-family: "Roboto_500Medium";
    font-size: 16px;
    text-align: center;

    justify-content: center;
`;