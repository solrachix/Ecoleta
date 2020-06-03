import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
        text-decoration: none;

        display: flex;
        align-items: center;
    }

    a svg {
        margin-right: 16px;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
