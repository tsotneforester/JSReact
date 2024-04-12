import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  color: {
    light_blue: "#c1d8ef",
  },
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: dot;
      src: url(./font/dot.ttf);
    }

body {
  min-height: 100svh;
  background-color: ${root.color.light_blue};
  font-family: "dot", sans-serif;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 100svh;
  align-content: center;
}


`;

export const optionContainer = css`
  width: 100%;
  max-width: 460px;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${root.media}) {
    padding: 30px;
    background-color: ${root.color.white};
  }
`;

export const formContainer = css`
  background-color: ${root.color.white};
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 28px;
  border-radius: 10px;
  @media only screen and (min-width: ${root.media}) {
    padding: 0;
  }
`;

export const baseBox = css`
  width: 100%;

  padding: 12px;
  height: auto;
  border-radius: 8px;
  background-color: transparent;
  border: 1px ${root.color.light_gray} solid;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media only screen and (min-width: ${root.media}) {
    flex-flow: column nowrap;
    gap: 30px;
    padding: 20px;
  }
`;

export const baseActiveBox = css`
  background-color: ${root.color.alabaster};
  border: 1px ${root.color.marine_blue} solid;
`;
