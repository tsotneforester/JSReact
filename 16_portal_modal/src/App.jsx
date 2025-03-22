import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContainer>
      <h1>React Modal with Portals</h1>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Hello, this is a modal!</h2>
        <p>This modal is rendered using React Portals.</p>
      </Modal>
    </AppContainer>
  );
}

// Styled Components
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default App;
