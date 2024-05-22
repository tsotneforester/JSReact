import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.header`
  width: 100%;
  height: auto;
  border-radius: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
  }
`;

export const Logo = styled.nav`
  width: 100%;
  height: auto;
  border-radius: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;

  @media only screen and (min-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 0;
    background-color: transparent;
  }
  @media only screen and (min-width: 768px) {
    & img:nth-of-type(2) {
      display: none;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 8px;
  cursor: pointer;
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }
`;

export const ListItem = styled(NavLink)`
  width: 100%;
  font-size: 20px;
  border-radius: 12px;
  color: rgb(10, 8, 125);
  font-weight: bold;
  text-align: left;
  padding: 8px 22px;
  transition: all 0.6s ease-in-out;
  &.active {
    color: white;
    background-color: #807eff;
  }
  @media only screen and (min-width: 768px) {
    padding: 8px;
  }
  &:hover {
    background-color: #807eff;
    padding: 8px 26px;
  }
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: initial;
      padding: 8px;
      background-color: #807eff;
      color: white;
    }
  }
`;

export const Social = styled.div`
  display: none;
  gap: 10px;
  padding: 12px 22px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0;
  background-color: transparent;
  gap: 10px;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  @media only screen and (min-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 0;
    background-color: transparent;
    overflow: visible;
    height: auto !important;
  }
`;

export const Main = styled.main`
  flex-grow: 2;
  color: black;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
