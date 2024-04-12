import styled from "styled-components";

const Control = ({ handler }) => {
  return (
    <>
      <Button onClick={handler}></Button>
    </>
  );
};

export default Control;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: rgb(253, 253, 253);
  background-image: url("img/play.png");
  background-position: center center;
  border: 3px black solid;
  transition: all 1s;
`;
