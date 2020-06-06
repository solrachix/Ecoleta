import styled from 'styled-components';

export const Container = styled.div `
    flex: 1;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    /* max-width: 1100px; */
    margin: 0 auto;
    /* padding: 0 30px; */
    background: ${({ theme }) => theme.colors.secundary};

    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 900px) {
        align-items: center;
        text-align: center;
    }
`;