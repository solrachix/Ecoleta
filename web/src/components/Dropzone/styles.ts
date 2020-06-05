import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
    background: #E1FAEC;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    outline: 0;
  
    img {
        width: 100%;
        height: 100%; 
        object-fit: cover;
    }
`;

export const P = styled.p`
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #4ECB79;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    
    svg {
        color: #4ECB79;
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
    }
`;