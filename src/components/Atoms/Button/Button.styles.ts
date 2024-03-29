import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledButton = styled.button`
    width: 25rem;
    height: 5rem;
    border: ${({ theme }) => `solid 0.2rem ${theme.colors.orange}`};
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 1.5rem auto;
    
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
        height: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}px) {
        width: 40rem;
    }
`