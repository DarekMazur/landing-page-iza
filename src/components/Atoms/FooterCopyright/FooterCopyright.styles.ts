import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledFooterCopyright = styled.p`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.s};

    @media (min-width: ${theme.breakpoints.desktop}px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`