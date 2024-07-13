import './App.css';
import React from 'react';
import Keyboard from './components/Keyboard.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f0f0;
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <Title>Interactive Music Synthesizer</Title>
      <Keyboard />
    </AppContainer>
  );
}

export default App;
