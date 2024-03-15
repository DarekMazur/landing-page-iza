import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
	html {
      box-sizing: border-box;
      font-size: 62.5%;
      font-family: ${({theme}) => theme.fonts.main};
      background-color: ${({ theme }) => theme.colors.grey};
    }
  
  body {
      margin: 0;
      padding: 0;
      font-size: ${({theme}) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.orange};
  }
  
  h1 {
      font-size: ${({theme}) => theme.fontSize.xl};
  }
  
  h2 {
      font-size: ${({theme}) => theme.fontSize.l};
  }
  
  h3, h4, h5, h6 {
      font-size: ${({theme}) => theme.fontSize.m}
  }

    *, *::after, *::before {
      box-sizing: inherit;
    }
`;
