import styled from 'styled-components';

export const Container = styled.div `
    flex: 1;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media(max-width: 900px) {
        align-items: center;
        text-align: center;
    }
`;