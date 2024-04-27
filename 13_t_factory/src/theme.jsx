import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const root = {
  animation_time: "0.2s",
  gradient_height: "80px",
  color: {
    marine_blue: "hsl(213, 96%, 18%)",
  },
  media: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: #c9dbe9;
}

#root {
  min-height: 100svh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (min-width: ${root.media.tablet}) {
    flex-direction: row;
  }
}
`;
