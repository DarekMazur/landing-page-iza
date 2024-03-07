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
    }
  
  body {
      margin: 0;
      padding: 0;
  }

    *, *::after, *::before {
      box-sizing: inherit;
    }
`;
