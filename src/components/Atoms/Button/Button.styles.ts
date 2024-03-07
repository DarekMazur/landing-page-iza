import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 25rem;
    height: 5rem;
    border: ${({ theme }) => `solid 0.2rem ${theme.colors.orange}`};
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 1.5rem auto;
`