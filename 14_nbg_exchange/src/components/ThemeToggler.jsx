import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { root } from "../theme";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { AppContext } from "../Context";
import { motion } from "framer-motion";

function ThemeToggler() {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <>
      <Container
        initial={{ scale: 0 }}
        animate={{ rotate: 90, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}>
        <Icons rotate={isDarkMode ? "180" : "0"}>
          <Moon onClick={() => setIsDarkMode(!isDarkMode)} />
          <Sun onClick={() => setIsDarkMode(!isDarkMode)} />
        </Icons>
      </Container>
    </>
  );
}

export default ThemeToggler;

const defaultIcon = css`
  width: ${root.theme_icon_size};
  height: ${root.theme_icon_size};
  & path {
    fill: ${(prop) => prop.theme.theme_icon};
  }
`;

const Moon = styled(MoonIcon)`
  ${defaultIcon}
`;

const Sun = styled(SunIcon)`
  ${defaultIcon}
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${root.theme_icon_size};
  height: ${root.theme_icon_size};
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(${root.theme_icon_size} / 2);
  transform: rotate(${(prop) => prop.rotate}deg);
  transition: all ${root.animation_time};
`;
