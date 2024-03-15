import styled from 'styled-components';
import { theme } from '../../../utils/themes/theme.ts';

export const StyledFooterInfo = styled.div`
  margin: 1rem 0;
    
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: ${({ theme }) => theme.fontSize.s};

  }
      @media (min-width: ${theme.breakpoints.desktop}px) {
          margin: 0;
          
          a {
            font-size: ${({ theme }) => theme.fontSize.m};
          }
      }
`
