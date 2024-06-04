import styled, { css } from "styled-components";
import { root } from "../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
//import { setPage } from "../store";

function Paginator() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  // const page = useSelector((state) => state.page);
  // const chunk = useSelector((state) => state.chunk);
  // const dispatch = useDispatch();

  // console.log(data);

  let pages = Math.ceil(data.length / 12);

  // console.log(pages);

  function handler(e) {
    const params = new URLSearchParams(searchParams);
    params.set("page", e);
    setSearchParams(params);

    navigate(`/?${params.toString()}`);
  }

  // function handlePrev() {
  //   if (page == 1) {
  //     dispatch(setPage(pages));
  //   } else {
  //     dispatch(setPage(page - 1));
  //   }
  // }

  // function handleNext() {
  //   if (page == pages) {
  //     dispatch(setPage(1));
  //   } else {
  //     dispatch(setPage(page + 1));
  //   }
  // }
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    // dispatch(setPage(1));
    setSearchParams(params);
    navigate(`/?${params.toString()}`);
  }, []);

  return (
    <>
      <S.Container>
        <Controls>
          {Array.from({ length: pages }, (_, i) => i + 1).map((e, i) => {
            return (
              <Prev key={i} onClick={() => handler(e)}>
                {e}
              </Prev>
            );
          })}
        </Controls>
      </S.Container>
    </>
  );
}

export default Paginator;

const S = {};

function Dots() {
  return <Dot>...</Dot>;
}

let constants = {
  time: "0.6s",
  padding: "8px 12px",
  text: "#394e6a",
  active: "#e2e8f4",
  bg: "#f0f6ff",
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

S.Container = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media only screen and (min-width: ${root.media.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: paginator;
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
  margin: 4px;
  /* border-bottom-left-radius: 10px;
  border-top-left-radius: 10px; */
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
  position: relative;
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
