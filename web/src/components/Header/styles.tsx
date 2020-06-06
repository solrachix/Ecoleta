import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';

export const Container = styled.div`
    width: 80%;
    height: 10%;
    margin: 30px;

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

export const Sun = styled(FiSun)`
    color: ${({ theme }) => theme.colors.primary};

    cursor: pointer;
`;