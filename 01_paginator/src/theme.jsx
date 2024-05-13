import { createGlobalStyle } from "styled-components";

export const root = {
  animationTime: "0.9s",
  color: { modeToggler: "#272935", modeTogglerDot: "white", body: "#FFFFFF", text: "#394e6a", active: "#e2e8f4", bg: "#f0f6ff" },
  media: {
    tablet: 768,
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    color: ${root.text};
    transition: background ${root.animationTime} ease-in, color ${root.animationTime} ease-in;
  }

  #root {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
}
`;
