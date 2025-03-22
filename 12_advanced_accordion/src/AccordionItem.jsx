import styled from 'styled-components';

export default function AccordionItem({ item, isSelected, onToggle }) {
  return (
    <Item>
      <Title onClick={onToggle}>
        <h3>{item.question}</h3>
        <span>{isSelected ? '-' : '+'}</span>
      </Title>
      {isSelected && <Content>{item.answer}</Content>}
    </Item>
  );
}

const Item = styled.div`
  background: #2983bb;
  margin-bottom: 10px;
  padding: 10px 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #34a8ef;
  }
`;

const Title = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Content = styled.div`
  color: #ffffff;
  height: auto;
  padding: 10px 0;
`;
