import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledImage = styled.img`
    width: 15.5rem;
    height: 15.5rem;
    object-fit: cover;
    margin: 1.4rem 0;

    @media (min-width: ${theme.breakpoints.desktop}px) {
        width: 30rem;
        height: 30rem;
    }
`