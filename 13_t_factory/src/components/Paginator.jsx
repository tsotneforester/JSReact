import styled, { css } from "styled-components";
import { root } from "../theme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
//import { setPage } from "../store";

function Paginator() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  const chunk = useSelector((state) => state.chunk);
  let page = Number(searchParams.get("page"));

  let pages = Math.ceil(data.length / chunk);

  function handlePrev() {
    if (page == 1) {
      pageSetter(pages);
    } else {
      pageSetter(page - 1);
    }
  }

  function handleNext() {
    if (page == pages) {
      pageSetter(1);
    } else {
      pageSetter(page + 1);
    }
  }

  function pageSetter(p) {
    const params = new URLSearchParams(searchParams);
    params.set("page", p);
    setSearchParams(params);
    navigate(`/?${params.toString()}`);
  }

  useEffect(() => {
    pageSetter(1);
  }, []);

  return (
    <>
      <S.Container>
        {data < chunk != 1 && (
          <Controls>
            {/* |||||||  PREV & 1st page ||||||| */}
            {page != 1 && <Prev onClick={handlePrev}>Prev</Prev>}
            <FirstPage bg={page == 1 ? "dark" : undefined} onClick={() => pageSetter(1)}>
              1
            </FirstPage>

            {/* ||||| 2nd page and it's dots |||||||| */}
            {page == 2 && page != pages - 1 && page != pages ? <SecondPage bg={page == 2 ? "dark" : undefined}>2</SecondPage> : ""}

            {page == 2 && pages > 3 ? <Dots /> : ""}

            {/* ||||| middle page & dots |||||||| */}
            {page > 2 && page < pages - 1 && (
              <>
                <Dots />
                <MiddlePage bg="dark">{page}</MiddlePage>
                <Dots />
              </>
            )}

            {/* ||||| 1st ... last |||||||| */}
            {(page == 1 || page == pages) && pages > 2 ? <Dots /> : ""}

            {/* ||||| prelast page and it's dots |||||||| */}
            {page == pages - 1 && pages > 3 ? <Dots /> : ""}
            {page == pages - 1 && page != 1 ? <PreLastPage bg="dark">{pages - 1}</PreLastPage> : ""}

            {/* |||||||  NEXT & last page ||||||| */}
            {pages > 1 && (
              <LastPage bg={page == pages ? "dark" : undefined} onClick={() => pageSetter(pages)}>
                {pages}
              </LastPage>
            )}

            {page != pages && <Next onClick={handleNext}>Next</Next>}
          </Controls>
        )}
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
