import React, { useState, useRef } from "react";
import { Navbar, Logo, List, Social, ListContainer, ListItem } from "./Styled";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const listContRef = useRef(null);
  const listRef = useRef(null);

  const linkStyles = {
    height: showLinks ? `${listRef.current.getBoundingClientRect().height}px` : "0px",
  };

  function handler() {
    setShowLinks(!showLinks);
  }

  return (
    <Navbar>
      <Logo>
        <img src="assets/logo.png" alt="logo" />
        <img src="assets/menu.png" alt="menu" onClick={handler} />
      </Logo>
      <ListContainer ref={listContRef} style={linkStyles}>
        <List ref={listRef}>
          <ListItem to="/">Home</ListItem>
          <ListItem to="about">About</ListItem>
          <ListItem to="project">Projects</ListItem>
          <ListItem to="contact">Contact</ListItem>
          <ListItem to="profile">Profile</ListItem>
        </List>
      </ListContainer>
      <Social>
        <img src="assets/facebook.png" alt="logo" />
        <img src="assets/instagram.png" alt="logo" />
        <img src="assets/linkedin.png" alt="logo" />
        <img src="assets/twitter.png" alt="logo" />
      </Social>
    </Navbar>
  );
}

export default Header;
