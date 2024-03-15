import styled from 'styled-components';
import hero from '../../../assets/hero.jpg'
import { theme } from '../../../utils/themes/theme.ts';

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

    @media (min-width: ${theme.breakpoints.desktop}px) {
        height: 50rem;
        justify-content: space-between;
        
        h1 {
            padding-top: 24rem;
        }
        
        &::after {
            height: 102%;
            background: transparent;
            background: linear-gradient(180deg, rgba(2,0,36,0) 15%, rgba(240,236,243,1) 90%, rgba(233,232,234,1) 100%);
        }
    }
`