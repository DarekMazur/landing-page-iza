import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledWrapper = styled.div`
    width: 15rem;

    @media (min-width: ${theme.breakpoints.desktop}px) {
        width: 30rem;
    }
`