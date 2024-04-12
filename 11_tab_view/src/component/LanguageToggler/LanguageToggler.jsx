import { useState, useContext } from "react";
import styled from "styled-components";
import { data } from "./data";
import { LanguageContext } from "../../Context";

function LanguageToggler() {
  // const [language, setLanguage] = useState(data[0]["code"]);
  const { language, setLanguage } = useContext(LanguageContext);
  const [langModalVisible, setLangModalVisible] = useState(false);

  document.body.addEventListener("click", () => setLangModalVisible(false));

  return (
    <>
      <S.Container>
        <S.Indicator
          onClick={(e) => {
            e.stopPropagation();
            setLangModalVisible((lastState) => !lastState);
          }}>
          <img className="flag" src={`https://flagsapi.com/${language.toUpperCase()}/shiny/64.png`} alt={language} />
          <img className={`arrow ${langModalVisible ? "" : "rotated"}`} src="img/arrow.png" alt="arrow" />
        </S.Indicator>
        <S.Modal className={langModalVisible ? "" : "hidden"}>
          {data.map((country, i) => {
            let { code, name } = country;
            return (
              <div
                key={i}
                className="line"
                onClick={(e) => {
                  setLanguage(code);
                  e.stopPropagation();
                  setLangModalVisible(false);
                }}>
                <img className="flag" src={`https://flagsapi.com/${code.toUpperCase()}/shiny/64.png`} alt={code} />
                <p>{name}</p>
                {language == code && <img src="img/check.png" alt="check" />}
              </div>
            );
          })}
        </S.Modal>
      </S.Container>
    </>
  );
}

export default LanguageToggler;

const S = {};

S.Container = styled.main`
  position: absolute;
  top: 10px;
  right: 10px;
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 20px;
`;

S.Indicator = styled.div`
  width: 85px;
  height: 45px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 6px;

  & .arrow {
    width: 16px;
    transform: rotate(180deg);
    transition: transform 0.4s;
  }

  & .arrow.rotated {
    width: 16px;
    transform: rotate(0);
  }
  & .flag {
    width: 42px;
  }
`;

S.Modal = styled.div`
  width: auto;
  height: auto;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  padding: 16px 20px;
  transition: visibility 0s, opacity 1.5s ease;
  visibility: visible;
  opacity: 1;
  .line {
    & {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }
    p {
      text-transform: uppercase;
      font-weight: 700;
    }
    img {
      width: 32px;
    }
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;
