import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.decorative};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    z-index: 2;
`