import React, { useState } from "react";
import styled, { css } from "styled-components";
import dateFormat from "dateformat";
import { root, device } from "../theme";

function Paginator({ data, singlePageLines }) {
  let [activePage, setActivePage] = useState(1);
  let displaydData = data.slice((activePage - 1) * singlePageLines, activePage * singlePageLines);
  let pageCount = Math.ceil(data.length / singlePageLines);

  function handlePrev() {
    if (activePage == 1) {
      setActivePage(pageCount);
    } else {
      setActivePage((e) => e - 1);
    }
  }

  function handleNext() {
    if (activePage == pageCount) {
      setActivePage(1);
    } else {
      setActivePage((e) => e + 1);
    }
  }

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((header, ind) => {
                return <th key={ind}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {displaydData.map((e, ind) => {
              return (
                <tr key={e.id}>
                  <td>{(activePage - 1) * singlePageLines + ind + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td>{e.age}</td>
                  <td>{e.balance}</td>
                  <td>{dateFormat(new Date(e.registered), "HH:MM TT - mmm dS, yyyy")}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Footer>
          <h1>Total Orders : {data.length}</h1>
          <Controls>
            <Prev onClick={handlePrev}>Prev</Prev>
            <FirstPage bg={activePage == 1 && "dark"} onClick={() => setActivePage(1)}>
              1
            </FirstPage>
            {activePage == 1 ? "" : activePage == 2 ? <SecondPage bg={activePage == 2 && "dark"}>2</SecondPage> : <Dots />}
            {activePage > 2 && activePage < pageCount - 1 && <MiddlePage bg="dark">{activePage}</MiddlePage>}
            {activePage == pageCount ? "" : activePage == pageCount - 1 ? <PreLastPage bg="dark">{pageCount - 1}</PreLastPage> : <Dots />}
            <LastPage bg={activePage == pageCount && "dark"} onClick={() => setActivePage(pageCount)}>
              {pageCount}
            </LastPage>
            <Next onClick={handleNext}>Next</Next>
          </Controls>
        </Footer>
      </Container>
    </>
  );
}

export default Paginator;

function Dots() {
  return <Dot>...</Dot>;
}

let constants = {
  active: (prop) => prop.theme.active,
  text: (prop) => prop.theme.text,
  bg: (prop) => prop.theme.bg,
  time: root.animationTime,
  padding: "8px 12px",
};

const defaultButton = css`
  padding: ${constants.padding};
  background-color: ${constants.bg};
  color: ${constants.text};
  transition: background ${constants.time} ease-in, color ${constants.time} ease-in;
  &:hover {
    background-color: ${constants.active};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 30px;
`;

const Table = styled.table`
  border-collapse: collapse;

  th {
    padding: ${constants.padding};
    color: ${constants.text};
    text-transform: capitalize;
    border-bottom: ${constants.active} solid 1px;
    transition: all ${constants.time} ease-in;
    text-align: center;

    &:last-child,
    &:nth-child(3) {
      display: none;

      @media ${device.tablet} {
        display: block;
      }
    }
  }

  td {
    text-align: left;
    padding: ${constants.padding};
    color: ${constants.text};
    transition: background ${constants.time} ease-in, color ${constants.time} ease-in;
    &:nth-child(4) {
      text-align: center;
    }
    &:last-child,
    &:nth-child(3) {
      display: none;

      @media ${device.tablet} {
        display: flex;
      }
    }
  }

  & tr:nth-child(even) {
    background-color: ${constants.bg};
    transition: background ${constants.time} ease-in, color ${constants.time} ease-in;
  }

  & tr:nth-child(even):hover {
    background-color: ${constants.active};
  }
`;

const Footer = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & h1 {
    color: ${constants.text};
    font-size: 16px;
    font-weight: bold;
    transition: background ${constants.time} ease-in, color ${constants.time} ease-in;
  }
`;

const Controls = styled.div`
  display: flex;
  font-weight: bold;
`;

const Prev = styled.button`
  ${defaultButton}
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Next = styled.button`
  ${defaultButton}
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const FirstPage = styled.button`
  ${defaultButton}
  background-color: ${(prop) => (prop.bg == "dark" ? constants.active : constants.bg)};
  font-weight: ${(prop) => (prop.bg == "dark" ? "bold" : "400")};
`;

const SecondPage = styled.button`
  ${defaultButton}
  background-color: ${(prop) => (prop.bg == "dark" ? constants.active : constants.bg)};
  font-weight: ${(prop) => (prop.bg == "dark" ? "bold" : "400")};
`;

const MiddlePage = styled.button`
  ${defaultButton}
  background-color: ${(prop) => (prop.bg == "dark" ? constants.active : constants.bg)};
  font-weight: ${(prop) => (prop.bg == "dark" ? "bold" : "400")};
`;

const PreLastPage = styled.button`
  ${defaultButton}
  background-color: ${(prop) => (prop.bg == "dark" ? constants.active : constants.bg)};
  font-weight: ${(prop) => (prop.bg == "dark" ? "bold" : "400")};
`;

const LastPage = styled.button`
  ${defaultButton}
  background-color: ${(prop) => (prop.bg == "dark" ? constants.active : constants.bg)};
  font-weight: ${(prop) => (prop.bg == "dark" ? "bold" : "400")};
`;

const Dot = styled.button`
  ${defaultButton}
`;
