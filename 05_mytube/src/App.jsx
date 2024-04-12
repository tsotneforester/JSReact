import React, { useRef } from "react";
import Control from "./components/Control";
import Line from "./components/Line";
import Video from "./components/Video";
import styled from "styled-components";

const App = () => {
  const refVideo = useRef(null);
  const refLine = useRef(null);

  function handler(e) {
    if (refVideo.current.paused) {
      refVideo.current.play();
      e.target.style.backgroundImage = `url(img/pause.png)`;
      refVideo.current.addEventListener("timeupdate", function () {
        console.log(refVideo.current.currentTime / refVideo.current.duration);
        refLine.current.style.width = `${(refVideo.current.currentTime / refVideo.current.duration) * 100}%`;
      });
    } else {
      refVideo.current.pause();
      e.target.style.backgroundImage = `url(img/play.png)`;
    }
  }

  return (
    <>
      <S.TV>
        <Line refLine={refLine} />
        <Video refVideo={refVideo} />
      </S.TV>
      <Control handler={handler} />
    </>
  );
};

export default App;

const S = {};

S.TV = styled.main`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
