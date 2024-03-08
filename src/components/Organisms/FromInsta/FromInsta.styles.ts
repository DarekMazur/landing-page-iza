import styled from 'styled-components';

export const StyledFromInsta= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem;
    
    a {
        text-decoration: none;
        color: inherit;
        transform-origin: 50% 50%;
        transition: transform .3s ease-in-out;
        
        &:hover {
            transform: scale(1.1);
        }
    }
`