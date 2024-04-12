import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { data } from "./data";
let arrLength = data.length - 1;

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  // let timer = setTimeout(function () {
  //   setActiveSlide((e) => e + 1);

  //   if (activeSlide == arrLength) {
  //     setActiveSlide(0);
  //   }
  // }, 1500);

  useEffect(() => {
    console.log("Active Image: ", activeSlide + 1);
  });

  return (
    <>
      <Main>
        {data.map((card, i) => {
          const { id, image, name } = card;
          return (
            <Card
              key={id}
              url={image}
              active={i === activeSlide}
              onClick={() => {
                setActiveSlide(i);
                // clearTimeout(timer);
              }}>
              <h3>{name}</h3>
            </Card>
          );
        })}
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: clamp(6px, 3vw, 32px);
  max-width: 420px;
  max-height: 700px;
  width: 100%;
  padding: 8px;

  @media only screen and (min-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-width: 800px;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 30px;
  border-radius: 30px;
  background-color: transparent;
  flex-grow: 0;
  overflow: hidden;
  transition: all 0.6s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
  border: black 3px solid;
  flex-grow: ${(prop) => prop.active && "4"};
  background-image: url(${(prop) => prop.url});

  @media only screen and (min-width: 480px) {
    width: clamp(30px, 5vw, 50px);
    height: 350px;
    border-radius: 30px;
    background-color: transparent;
    background-position: top;
    background-size: auto 120%;
  }

  &:hover {
    cursor: pointer;
    background-position: top;
  }
  @media only screen and (min-width: 480px) {
    background-size: auto 100%;
  }

  h3 {
    opacity: ${(prop) => (prop.active ? 1 : 0)};
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 24px;
    color: white;
    font-weight: 400;
    text-align: left;
    transition: all 0.6s ease;
    text-transform: capitalize;
  }
`;
