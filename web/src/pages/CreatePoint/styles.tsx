import styled from 'styled-components';
import { rgba } from 'polished';

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
    margin: 0px auto;
    padding: 64px;
    max-width: 730px;
    background: ${({ theme }) => theme.colors.secundary};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 36px;
    }

    button {
        width: 260px;
        height: 56px;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        align-self: flex-end;
        margin-top: 40px;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    button:hover {
        background: ${({ theme }) => rgba(theme.colors.primary, 0.9)};
    }
`;

export const Fieldset = styled.fieldset`
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;

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

    /* .field-check {
        flex-direction: row;
        align-items: center;
    }

    .field-check input[type=checkbox] {
        background: #F0F0F5;
    }

    .field-check label {
        margin: 0 0 0 8px;
    }  */

    .leaflet-container {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        margin-bottom: 24px;
    }   

`;

export const FieldGroup = styled.div`
    flex: 1;
    display: flex; 

    nav + nav  {
        margin-left: 24px;
    }

    input + input {
        margin-left: 24px;
    }

`;

export const Field = styled.nav`
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    input, select {
        border-width: 1px;
        border-color:  ${({ theme }) => rgba(theme.colors.primary, 0.08)}
    }

    input[type=text],
    input[type=email],
    input[type=number] {
        flex: 1;
        background: ${({ theme }) => theme.colors.tertiary};
        border-radius: 8px;
        padding: 16px 24px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text};
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: ${({ theme }) => theme.colors.tertiary};
        border-radius: 8px;
        padding: 16px 24px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text};
    }

    input::placeholder {
        color: #A0A0B2;
    }

    label {
        font-size: 14px;
        margin-bottom: 8px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;

    @media(max-width: 570px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }

    li {
        background: ${({ theme }) => theme.colors.tertiary};
        border: 2px solid ${({ theme }) => rgba(theme.colors.primary, 0.08)};
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
        background: ${({ theme }) => rgba(theme.colors.primary, 0.08)};
        border: 2px solid ${({ theme }) => rgba(theme.colors.primary, 0.8)};
    }
`;