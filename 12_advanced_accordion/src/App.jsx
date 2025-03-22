import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import AccordionItem from './AccordionItem';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleMultiSelection = (id) => {
    setMultiple((prevMultiple) => {
      const newMultiple = [...prevMultiple];
      const index = newMultiple.indexOf(id);
      if (index === -1) {
        newMultiple.push(id);
      } else {
        newMultiple.splice(index, 1);
      }
      return newMultiple;
    });
  };

  const toggleSelection = (id) => {
    if (enableMultiSelection) {
      handleMultiSelection(id);
    } else {
      handleSingleSelection(id);
    }
  };

  return (
    <Wrapper>
      <Button
        $isActive={enableMultiSelection}
        onClick={() => setEnableMultiSelection((prev) => !prev)}
      >
        {enableMultiSelection
          ? 'Disable Multi Selection'
          : 'Enable Multi Selection'}
      </Button>
      <Accordion>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isSelected = enableMultiSelection
              ? multiple.includes(dataItem.id)
              : selected === dataItem.id;

            return (
              <AccordionItem
                key={dataItem.id}
                item={dataItem}
                isSelected={isSelected}
                onToggle={() => toggleSelection(dataItem.id)}
              />
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(135deg, #f0f4f8, #c9d6e3);
`;

const Button = styled.button`
  padding: 10px 20px;
  background: ${({ $isActive }) => ($isActive ? '#ff6b6b' : '#4caf50')};
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ $isActive }) => ($isActive ? '#ff4c4c' : '#45a049')};
  }
`;

const Accordion = styled.div`
  width: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;
