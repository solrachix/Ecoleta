import styled from 'styled-components';
import { rgba, lighten } from 'polished';

export const Container = styled.div`
    height: 300px;
    background: ${({ theme }) => rgba(theme.colors.primary, 0.08)};
    /* #E1FAEC; */
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
    border: 1px dashed  ${({ theme }) => lighten(0.05, theme.colors.primary)}; /* #4ECB79 */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    
    svg {
        color: ${({ theme }) => lighten(0.05, theme.colors.primary)}; /* #4ECB79 */
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
    }
`;