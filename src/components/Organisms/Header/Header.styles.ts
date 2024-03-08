import styled from 'styled-components';
import { faker } from '@faker-js/faker';

const background = faker.image.urlLoremFlickr({ category: 'nature' })

export const StyledHeader = styled.header`
    height: 29rem;
    background: url(${background});
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
        background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(240,236,243,1) 73%, rgba(233,232,234,1) 95%);
        z-index: 0;
    }
`