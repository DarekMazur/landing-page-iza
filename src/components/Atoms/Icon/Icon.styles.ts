import styled from 'styled-components';

export const StyledIcon = styled.span<{$size?: number; $padding?: string}>`
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ $size }) => $size ? `${$size}rem` : '1.7rem'};
    padding: ${({$padding}) => $padding ? $padding : '0 1rem'};
`
