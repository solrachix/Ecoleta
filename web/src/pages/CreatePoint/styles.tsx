import styled from 'styled-components';

// import { Types } from '../../styles/themes/Types';

// declare module 'styled-components' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface DefaultTheme extends Types {}
// }

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
`;

export const Form = styled.form`
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: ${({ theme }) => theme.colors.secundary};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 36px;
    }

    fieldset {
        margin-top: 64px;
        min-inline-size: auto;
        border: 0;
    }

    legend {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    legend h2 {
        font-size: 24px;
    }

    legend span {
        font-size: 14px;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.text};
    }

    .field-group {
        flex: 1;
        display: flex;
    }

    .field {
        flex: 1;

        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    .field input[type=text],
    .field input[type=email],
    .field input[type=number] {
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text};
    }

    .field select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text};
    }

    .field input::placeholder {
        color: #A0A0B2;
    }

    .field label {
        font-size: 14px;
        margin-bottom: 8px;
    }

    .field :disabled {
        cursor: not-allowed;
    }

    .field-group .field + .field {
        margin-left: 24px;
    }

    .field-group input + input {
        margin-left: 24px;
    }

    .field-check {
        flex-direction: row;
        align-items: center;
    }

    .field-check input[type=checkbox] {
        background: #F0F0F5;
    }

    .field-check label {
        margin: 0 0 0 8px;
    }

    .leaflet-container {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        margin-bottom: 24px;
    }

    button {
        width: 260px;
        height: 56px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.secundary};
        font-weight: bold;
        font-size: 16px;
        border: 0;
        align-self: flex-end;
        margin-top: 40px;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    button:hover {
        background: #2FB86E;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;

    li {
        background: #f5f5f5;
        border: 2px solid #f5f5f5;
        height: 180px;
        border-radius: 8px;
        padding: 32px 24px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;
    }

    li span {
        flex: 1;
        margin-top: 12px;

        display: flex;
        align-items: center;
        color: var(--title-color)
    }

    li.selected {
        background: #E1FAEC;
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }
`;