import { createGlobalStyle } from "styled-components";

export const light = {
  modeToggler: "#272935",
  modeTogglerDot: "white",
  body: "#FFFFFF",
  text: "#394e6a",
  active: "#e2e8f4",
  bg: "#f0f6ff",
};
export const dark = {
  modeToggler: "white",
  modeTogglerDot: "#272935",
  body: "#272935",
  text: "#f8f8f2",
  active: "#08090C",
  bg: "#181920",
};

export const root = {
  animationTime: "0.9s",
};

export const device = {
  tablet: `(min-width: 768px)`,
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${(prop) => prop.theme.body};
    color: ${(prop) => prop.theme.text};
    transition: background ${root.animationTime} ease-in, color ${root.animationTime} ease-in;
  }
`;
