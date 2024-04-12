import React, { useEffect, useState } from "react";
import { root, defaultInput } from "../theme";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/close-outline.svg";

function Select({ data, setFromCur, curr, children }) {
  const [filtered, setFiltered] = useState({});

  const [tempList, setTempList] = useState([]);

  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function searchHandler(e) {
    let input = e.target.value.toLowerCase();
    setSearchInput(input);
    let newNumbers = data.filter((e) => {
      return e.nameENG.toLowerCase().includes(input);
    });
    setTempList(newNumbers);
  }

  useEffect(() => {
    setTempList(data);
    let news = data.filter((e) => {
      return e.code == curr;
    });
    setFiltered(news[0]);
  }, [data]);

  return (
    <>
      <Container>
        <Currency>
          {searchMode ? (
            <>
              <input type="text" value={searchInput} onChange={searchHandler} placeholder="search... " />
              <CloseIcon
                onClick={function () {
                  setSearchMode(!searchMode);
                  setSearchInput("");
                  setTempList(data);
                }}
              />
            </>
          ) : (
            <ListItem onClick={() => setSearchMode(!searchMode)}>
              <img src={filtered?.flag} alt="" />
              <p>{filtered?.code}</p>
            </ListItem>
          )}
        </Currency>
        <Border />
        {children}
      </Container>

      {searchMode && (
        <Modal>
          {tempList.length == 0 ? (
            <p>No result available</p>
          ) : (
            tempList.map((e, ind) => {
              return (
                <ListItem
                  key={ind}
                  onClick={function () {
                    console.log(e.code);
                    setFromCur(e.code);
                    setSearchMode(!searchMode);
                    setSearchInput("");
                    setFiltered({});
                  }}>
                  <img src={e.flag} alt="" />
                  <p>{e.nameENG} </p>
                </ListItem>
              );
            })
          )}
        </Modal>
      )}
    </>
  );
}

export default Select;

const Container = styled.div`
  ${defaultInput}
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 4px;

  & p {
    font-weight: 600;
  }
`;

const Currency = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  & input {
    font-size: 14px;
    width: 40px;
    flex-grow: 1;
    border: none;
    background-color: transparent;
    transition: background ${root.animation_time};
    &::placeholder {
      color: #918c8c;
    }
  }
`;

const Border = styled.div`
  width: 2px;
  background-color: #b3b3b35c;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  background-color: transparent;
  transition: background ${root.animation_time};
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  max-height: 180px;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
`;
const ListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;

  & img {
    width: 32px;
  }
`;
const CloseIcon = styled(Close)`
  cursor: pointer;
  width: 20px;
`;
