import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const light = {
  body: "#f1f1f1",
  text: "#002855",
  shadow: "#9e9e9e",
  theme_icon: "#f1f1f1",
  disabled: "#555252",
};
export const dark = {
  body: "#121620",
  text: "#f1f1f1",
  shadow: "black",
  theme_icon: "#f1f1f1",
  disabled: "#b4b4b4",
};

export const root = {
  theme_icon_size: "40px",
  animation_time: "0.6s",
  border: "#d4cbcb",
  border_radius: "20px",
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    background: ${(prop) => prop.theme.body}; 
    color: ${(prop) => prop.theme.text};
    transition: background ${root.animation_time}, color ${root.animation_time};
  }
`;

export const defaultInput = css`
  color: inherit;
  width: 100%;
  height: 62px;
  padding: 14px 12px;
  background-color: transparent;
  border: 2px solid ${root.border};
  border-radius: ${root.border_radius};
  transition: background ${root.animation_time};
`;
