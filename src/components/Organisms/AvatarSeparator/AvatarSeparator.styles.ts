import styled from 'styled-components';

export const StyledAvatarSeparator = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 2.5rem 0;
    
    &::after {
        content: '';
        width: 100%;
        height: 0.2rem;
        background-color: ${({ theme }) => theme.colors.orange};
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`