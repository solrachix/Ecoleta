import styled from 'styled-components';
import { lighten } from 'polished';
import background from '../../assets/home-background.svg';

export const Container = styled.div`
    width: 100%;
    min-height: calc(90vh - 35px);
    padding: 0px 0px 0px 10%;
    /* max-width: 1200px; */
    @media(max-width: 700px) {
        padding: 0px 0px 0px 0px;
    }

    background: url('${background}') no-repeat 400px top;

    overflow: hidden;
`;

export const Content = styled.div`
    flex: 1;
    width: 100%;
    max-width: 460px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        font-size: 54px;
        color: ${({ theme }) => theme.title === "Dark" ? theme.colors.primary : theme.colors.text};
    }

    p {
        font-size: 24px;
        margin-top: 24px;
        line-height: 38px;
        color: ${({ theme }) => lighten(0.2, theme.colors.text)};
    }

    a {
        width: 100%;
        max-width: 360px;
        height: 72px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
        text-decoration: none;

        display: flex;
        align-items: center;
        overflow: hidden;

        margin-top: 40px;
    }

    a span {
        display: block;
        background: rgba(0, 0, 0, 0.08);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
    }

    a span svg {
        color: #FFF;
        width: 20px;
        height: 20px;
    }

    a strong {
        flex: 1;
        text-align: center;
        color: #FFF;
    }

    a:hover {
        background: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: 700px) {
        max-width: 100%;
        padding: 0px 5% 0px 5%;
    }
    
    @media(max-width: 900px) {
        align-items: center;
        text-align: center;

        h1 {
            font-size: 42px;
        }

        p {
            font-size: 24px;
        }
    }
`;