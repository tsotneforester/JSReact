import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }



  #root {
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    font-family: "Lato", sans-serif;
  }
`;
