import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    a { text-decoration:none; }

    p { margin: 0; }
    
    h2,h3 {
      margin: 0;
      font-size: 2.1rem;
    }

    img { width: 100% }
  }
`;