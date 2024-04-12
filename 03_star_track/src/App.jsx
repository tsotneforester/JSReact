import { useEffect, useState } from "react";
import { root, device } from "./theme";
import { ReactComponent as Star } from "./assets/star.svg";
import styled from "styled-components";
//imrse
//rafce
//imrr

function App() {
  let array = Array.from({ length: 10 });
  let [hoveredBoxId, setHoveredBoxId] = useState();
  let [activeBoxId, setActiveBoxId] = useState();
  let [BoxId, setBoxId] = useState();

  function enterHandle(id) {
    setHoveredBoxId(id + 1);
  }

  function leaveHandle() {
    if (activeBoxId) {
      setHoveredBoxId(activeBoxId);
    } else {
      setHoveredBoxId(0);
    }
  }

  function clickHandle(id) {
    setHoveredBoxId(id + 1);
    setActiveBoxId(id + 1);
    console.log(id + 1);
  }

  function submitHandle() {
    if (BoxId) {
      setBoxId();
    } else {
      setBoxId(activeBoxId);
      setHoveredBoxId();
      setActiveBoxId();
    }
  }

  return (
    <>
      <Container>
        {BoxId ? (
          <Message>You rated movie with {BoxId} ⭐️</Message>
        ) : (
          <Ratings>
            <Stars>
              {array.map((e, ind) => {
                return (
                  <div key={ind} onMouseEnter={() => enterHandle(ind)} onMouseLeave={() => leaveHandle()} onClick={() => clickHandle(ind)} className="box">
                    <StarIcon bg={hoveredBoxId >= ind + 1 ? root.yellow : "transparent"} />
                  </div>
                );
              })}
            </Stars>
            <Digit>{hoveredBoxId || "0"}</Digit>
          </Ratings>
        )}

        <Button onClick={submitHandle}>{BoxId ? "Refresh" : "+ Add to List"}</Button>
      </Container>
    </>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  max-width: 520px;
  height: 182px;
  border-radius: 8px;
  background-color: ${root.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //padding: 30px;
  padding: 10px;
  gap: 30px;
  @media ${device.mobile} {
    padding: 14px;
    height: 192px;
    max-width: 420px;
  }
  @media ${device.tablet} {
    padding: 20px;
    height: 200px;
    max-width: 520px;
  }
`;

const Ratings = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  @media ${device.tablet} {
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Stars = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & div {
    width: 40px;
    height: 40px;
    padding: 1px;
    border-radius: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Digit = styled.div`
  color: ${root.yellow};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 30px;
`;

const Button = styled.button`
  color: ${root.white};
  font-family: Arial, Helvetica, sans-serif;
  font-size: bold;
  width: 100%;
  height: auto;
  border-radius: 40px;
  font-size: 18px;
  padding: 14px;
  background-color: ${root.purpleDark};
  &:hover {
    background-color: ${root.purpleLight};
  }
`;

const Message = styled.h1`
  color: ${root.white};
  font-family: Arial, Helvetica, sans-serif;
  font-size: bold;
  width: 100%;
  height: auto;
  font-size: 24px;
  text-align: center;
`;

const StarIcon = styled(Star)`
  fill: ${(prop) => prop.bg};
  & path {
    stroke: ${root.yellow};
  }
`;
