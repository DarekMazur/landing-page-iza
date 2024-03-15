import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledTitle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.decorative};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    z-index: 2;

    @media (min-width: ${theme.breakpoints.desktop}px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`