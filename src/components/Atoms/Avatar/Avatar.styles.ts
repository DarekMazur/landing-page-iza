import styled from 'styled-components';

export const StyledAvatar = styled.img`
    border: ${({ theme }) => `solid 0.2rem ${theme.colors.orange}`};
    border-radius: 50%;
    object-fit: fill;
    height: 8.3rem;
    width: 8.3rem;
`