import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    background: rgba(0,0,0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 10;
    svg{
        width: 32px;
        height: 32px;
    }
`;

export const P = styled.p`
    width: 100%;
    margin-top: 2%;

    text-align: center;
    color: #F0F0F5;

    font-size: 1em;
    font-weight: bold;
`;