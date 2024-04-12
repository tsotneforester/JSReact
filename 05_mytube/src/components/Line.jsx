import styled from "styled-components";

const Line = ({ refLine }) => {
  return <ProgressLine ref={refLine}></ProgressLine>;
};

export default Line;

const ProgressLine = styled.div`
  height: 8px;
  max-width: 640px;
  background-color: red;
  border-radius: 6px;
  align-self: flex-start;
`;
