import styled from 'styled-components';
import hero from '../../../assets/hero.jpg'

export const StyledHeader = styled.header`
    height: 29rem;
    background: url(${hero}) 10%/cover no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 105%;
        background: transparent;
        background: linear-gradient(180deg, rgba(2,0,36,0) 25%, rgba(240,236,243,1) 73%, rgba(233,232,234,1) 100%);
        z-index: 0;
    }
`