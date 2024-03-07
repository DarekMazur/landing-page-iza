import styled from 'styled-components';

export const StyledFooterInfo = styled.div`
  margin: 2rem 0;
    
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`