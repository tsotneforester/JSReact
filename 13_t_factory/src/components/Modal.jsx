import styled from "styled-components";
import { setShowModal } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Modal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal);
  const activeProduct = useSelector((state) => state.activeProduct);

  return (
    showModal && (
      <S.Container>
        <div className="overlay" onClick={() => dispatch(setShowModal({ show: false, product: null }))}></div>
        <img src={`https://geojs.one/root/img/tfactory/raw/${activeProduct}`} alt="" />
      </S.Container>
    )
  );
}

export default Modal;

const S = {};

S.Container = styled.div`
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
