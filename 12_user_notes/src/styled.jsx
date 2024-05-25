import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { grey } from "@mui/material/colors";
import { lighten } from "@mui/material";

export const root = {
  theme_icon_size: "40px",
  animation_time: "0.6s",
  border: "#d4cbcb",
  border_radius: "20px",

  button_padding: "14px 10px",
  card_max_width: "412px",
  color: {
    white: "hsl(0, 0%, 100%)",
  },
  media: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
  },
  theme: {
    dark: {
      text: "#f1f1f1",
      body: "#011719f8",
      shadow: "black",
      theme_icon: "#f1f1f1",
      disabled: "#b4b4b4",
    },
    light: {
      text: "#002855",
      body: "#e3fdff82",
      shadow: "#9e9e9e",
      theme_icon: "#090808",
      disabled: "#555252",
    },
  },
};

export const light = {
  body: "#e3fdff82",
  text: "#002855",
  shadow: "#9e9e9e",
  theme_icon: "#090808",
  disabled: "#555252",
};
export const dark = {
  body: "#121620",
  text: "#f1f1f1",
  shadow: "black",
  theme_icon: "#f1f1f1",
  disabled: "#b4b4b4",
};

export const GlobalStyles = createGlobalStyle`
body {
}

#root {
  font-family: "Montserrat", sans-serif;
  min-height: 100svh;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.body};
 
  background-image: url("/assets/bg1.png"), url("/assets/bg2.svg");
  background-repeat: repeat, no-repeat; 
  background-position: 0% 0%, 0% 100%;

  /* background-image: url('image1.jpg'), url('image2.jpg');
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round 
  background-position: 0% 0%; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  background-size: auto; //length/cover/contain */



  /* background-image: url("/assets/bg2.svg");
  background-repeat: no-repeat; 
  background-position: bottom;  */


  /* background-image: url("/assets/bg1.png");
  background-repeat: repeat; */

  

  @media only screen and (min-width: ${root.media.tablet}px) {
    background-size: auto, contain;
  }
}
`;

export const styledFormContainer = css`
  width: 100%;
  min-height: 100svh;
  max-width: 352px;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  &[role="signup"] form {
    grid-template-rows: 88px 88px 88px 88px max-content;
  }
  &[role="login"] form {
    grid-template-rows: 88px 88px max-content;
  }

  h1 {
    margin-bottom: 70px;
    color: ${(prop) => prop.theme.text};
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  h2 {
    color: ${(prop) => prop.theme.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-top: 6px;
    opacity: 0.5;
  }

  form {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    input {
      width: 100%;
    }
  }
`;

export const styledLink = css`
  color: #328bf3;
  font-weight: 700;
`;

export const iconStyles = {
  color: grey[100],
  cursor: "pointer",
  opacity: 0.8,
  "&.Mui-checked": {
    color: grey[50],
  },
  "&.Mui-checked:hover": {
    opacity: 1,
  },
  "&:hover": {
    opacity: 1,
  },
};
