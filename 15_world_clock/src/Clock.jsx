import React from "react";
import styled from "styled-components";

export default function Clock({ data }) {
  return data.map((e, i) => {
    return (
      <S.Clock key={i}>
        <img src="./images/face.png" alt="face" />
        <div className="clock">
          <div className="hr-arrow">
            <img src="./images/hour.png" alt="hour" style={{ transform: `rotate(${e.hour * 30 + (30 / 60) * e.minute}deg)` }} />
          </div>
          <div className="min-arrow">
            <img src="./images/min.png" alt="minute" style={{ transform: `rotate(${e.minute * 6}deg)` }} />
          </div>
          <div className="sec-arrow">
            <img src="./images/sec.png" alt="second" style={{ transform: `rotate(${e.second * 6}deg)` }} />
          </div>
        </div>
        <div className="town">{e.zoneName}</div>
      </S.Clock>
    );
  });
}

const S = {};

S.Clock = styled.main`
  position: relative;
  width: 144px;
  height: 185px;
  text-align: center;

  & .clock {
    padding-bottom: 10px;
    width: 100%;
  }
  & .town {
    display: inline-block;
    width: 100%;
    background-color: black;
    height: auto;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    text-transform: uppercase;
    font-family: dot;
  }

  & img {
    display: block;
    width: 140px;
    height: 140px;
  }

  & .min-arrow {
    position: absolute;
    left: 64px;
    top: 23px;
    box-sizing: content-box;
    width: 13px;
    height: 53px;

    z-index: 48;

    img {
      display: inline-block;
      width: 13px;
      height: 53px;
      transform-origin: 50% 88%;
    }
  }

  & .hr-arrow {
    position: absolute;
    left: 66.5px;
    top: 41px;
    box-sizing: content-box;
    width: 9px;
    height: 34px;
    transform-origin: 50% 84%;
    z-index: 55;
    img {
      display: inline-block;
      width: 9px;
      height: 34px;
      transform-origin: 50% 84%;
    }
  }

  .sec-arrow {
    position: absolute;
    left: 65px;
    top: 25px;
    box-sizing: content-box;
    width: 9px;
    height: 54px;
    transform-origin: 50% 82%;
    z-index: 46;
    img {
      display: inline-block;
      width: 9px;
      height: 54px;
      transform-origin: 50% 82%;
    }
  }
`;
