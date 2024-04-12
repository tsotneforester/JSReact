import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const animations = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    type: "spring",
    duration: 1.2,
  },
};

function ReadMore({ children, ButtonColor, lessWords, startCollapsed, collapseButtonText, expandButtonText }) {
  let [fullText, setFullText] = useState(startCollapsed);

  console.log(children);
  const myArray = children.split(" ");
  myArray.splice(lessWords);
  let str = myArray.join(" ");

  return (
    <>
      <Container {...animations}>
        <Span>{fullText ? children : str + "..."}</Span>
        <Button onClick={() => setFullText(!fullText)} color={ButtonColor}>
          &nbsp; {fullText ? collapseButtonText : expandButtonText}
        </Button>
      </Container>
    </>
  );
}

export default ReadMore;

const Container = styled(motion.div)`
  width: 400px;
  height: auto;
  border: 2px black solid;
  padding: 16px;
  background-color: #e5dede;
  font-size: 20px;
  border-radius: 12px;
`;
const Span = styled.span``;

const Button = styled.span`
  color: ${(prop) => prop.color};
  cursor: pointer;
`;
