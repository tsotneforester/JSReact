import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { grey } from "@mui/material/colors";

export const root = {
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
  background-color: #e3fdff82;
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
    color: #1e1a50;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  h2 {
    color: #767e96;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-top: 6px;
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
