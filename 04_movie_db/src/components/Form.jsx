import React, { useEffect, forwardRef } from "react";
import styled from "styled-components";

const Form = forwardRef(function ({ handler }, ref) {
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <S.form onSubmit={handler}>
      <input ref={ref} type="text" placeholder="enter movie" />
      <button type="submit" onClick={handler}>
        GET
      </button>
    </S.form>
  );
});

export default Form;

const S = {};

S.form = styled.form`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
    max-width: 340px;
  }

  & button {
    font-size: 16px;
    color: white;
    font-weight: 600;
    text-align: center;
    width: 100%;
    height: 42px;
    border-radius: 12px;
    background-color: #ffc107;
    padding: 2px 6px;
    transition: all 0.8s;

    @media only screen and (min-width: 480px) {
      width: 68px;
    }

    &:hover {
      background-color: #c39406;
    }
  }

  & input {
    height: 42px;
    border-radius: 12px;
    text-indent: 20px;
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-align: left;
    border: none;
    width: 100%;

    & ::-moz-placeholder {
      font-style: italic;
      font-size: 14px;
      color: red;
      font-weight: 400;
      text-align: left;
    }
    & ::placeholder {
      font-style: italic;
      font-size: 14px;
      color: red;
      font-weight: 400;
      text-align: left;
    }
  }
`;
