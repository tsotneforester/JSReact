import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  color: {
    white: "hsl(0, 0%, 100%)",
  },
  media: {
    mobile: `(min-width: 480px)`,
    tablet: 768,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1280px)`,
  },
};

export const GlobalStyles = createGlobalStyle`
body {


}

#root {
  font-family: "Montserrat", sans-serif;
  min-height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("/bg.svg");
  background-repeat: no-repeat; //repeat-y/repeat-x/repeat/space/round
  background-position: bottom; // center/bottom/left/right/(%, px)
  background-attachment: scroll; //fixed / local
  //background-size: 100% auto; //length/cover/contain

  @media only screen and (min-width: ${root.media.tablet}px) {
    background-size: contain;
  }
}


`;

export const baseActiveBox = css`
  background-color: ${root.color.alabaster};
  border: 1px ${root.color.marine_blue} solid;
`;
