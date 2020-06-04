import styled from 'styled-components';
import background from '../../assets/home-background.svg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url('${background}') no-repeat 400px bottom;
`;

export const Content = styled.div`
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        font-size: 54px;
        color: ${({ theme }) => theme.colors.text};
    }

    p {
        font-size: 24px;
        margin-top: 24px;
        line-height: 38px;
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
        color: ${({ theme }) => theme.colors.secundary};
        width: 20px;
        height: 20px;
    }

    a strong {
        flex: 1;
        text-align: center;
        color: ${({ theme }) => theme.colors.secundary};
    }

    a:hover {
        background: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: 900px) {
        text-align: center;

        h1 {
            font-size: 42px;
        }

        p {
            font-size: 24px;
        }
    }
`;