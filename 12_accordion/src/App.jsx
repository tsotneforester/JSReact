import { data } from "./data";
import { useState, useRef } from "react";
import styled from "styled-components";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import React from "react";

function App() {
  const [active, setActive] = useState(null);
  const [height, setHeight] = useState();
  const inputRef = useRef([]);
  function handler(e) {
    setHeight(inputRef.current[e - 1].scrollHeight);
    if (active === e) {
      setActive(null);
    } else {
      setActive(e);
    }
  }

  return (
    <>
      {data.map((e, i) => {
        return (
          <Article ref={(el) => (inputRef.current[i] = el)} key={e.id} style={{ height: active === e.id ? `${height}px` : "60px" }}>
            <Button>
              <Plus
                style={{ display: active === e.id ? `none` : "block" }}
                onClick={() => {
                  handler(e.id);
                }}
              />

              <Minus
                style={{ display: active === e.id ? `block` : "none" }}
                onClick={() => {
                  handler(e.id);
                }}
              />
            </Button>
            <Question>{e.question}</Question>
            <Answer>{e.answer}</Answer>
          </Article>
        );
      })}
    </>
  );
}

export default App;

const Article = styled.article`
  width: 86%;
  border-radius: 8px;
  background-color: white;
  position: relative;
  max-width: 700px;
  margin: 30px auto;
  overflow: hidden;
  transition: height 0.5s ease;
  padding: 10px;
  border: 2px black solid;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;
const Button = styled.button`
  position: absolute;
  border-radius: 0;
  background-color: transparent;
  top: 10px;
  right: 10px;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  transform-origin: center;
  transition: all 0.9s ease;

  &:hover {
    outline: none;
    transform: rotate(90deg);
  }
`;
const Question = styled.div`
  padding: 2px;
  overflow: visible;
  font-size: 25px;
  color: black;
  font-weight: bold;
  text-align: left;
  width: calc(100% - 22px);
  justify-content: stretch;
  padding-bottom: 10px;
  margin: 2px;
`;
const Answer = styled.div`
  padding: 2px;
  overflow: visible;
  font-size: 18px;
  color: #787887;
  font-weight: 400;
  text-align: left;
`;
const Plus = styled(FaPlusSquare)`
  font-size: 20px;
  color: #c59d5f;
`;
const Minus = styled(FaMinusSquare)`
  font-size: 20px;
  color: #c59d5f;
`;
