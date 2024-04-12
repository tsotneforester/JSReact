import React from "react";
import styled from "styled-components";
import { root } from "../theme";
import { motion } from "framer-motion";

function Container({ children }) {
  return (
    <Main
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}>
      {children}
    </Main>
  );
}

export default Container;

const Main = styled(motion.div)`
  width: 100%;
  max-width: 430px;
  display: flex;

  flex-direction: column;
  justify-content: stretch;
  gap: 20px;
  margin: 10px;
  align-items: center;
  margin-top: 130px;
  padding: 30px;
  border-radius: ${root.border_radius};
  background-color: ${(prop) => prop.theme.body};
  box-shadow: 2px 0px 9px 0px ${(prop) => prop.theme.shadow};
  transition: background ${root.animation_time};

  & h1 {
    font-size: 16px;
    font-style: italic;
  }

  & p {
    font-size: 18px;
  }
`;
