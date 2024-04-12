import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../Context";

function Modal() {
  const { modalOpened, setModalOpened, activeProduct } = useContext(DataContext);
  return (
    modalOpened && (
      <S.Modal>
        <div className="overlay" onClick={() => setModalOpened(false)}></div>
        <img src={`https://gpx.ge/root/img/tfactory/raw/${activeProduct}`} alt="" />
      </S.Modal>
    )
  );
}

export default Modal;

const S = {};

S.Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    background-color: #928b8bcd;
  }

  & img {
    width: 98vh;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 7;
    transform: translate(-50%, -50%);
  }
`;
