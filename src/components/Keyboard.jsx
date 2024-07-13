import React, { useState } from 'react';
import * as Tone from 'tone';
import styled from 'styled-components';
import InstrumentSelector from './InstrumentSelector.jsx';

const notes = [
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'
];

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Key = styled.button`
  width: 40px;
  height: 120px;
  margin: 2px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #333; /* Темный цвет текста */
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s, box-shadow 0.3s;

  &:active {
    background: #e0e0e0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 90px;
    margin: 1px;
  }
`;

const KeysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const Keyboard = () => {
  const [instrument, setInstrument] = useState(new Tone.Synth().toDestination());

  const playNote = (note) => {
    instrument.triggerAttackRelease(note, '8n');
  };

  return (
    <KeyboardContainer>
      <InstrumentSelector setInstrument={setInstrument} />
      <KeysContainer>
        {notes.map((note, index) => (
          <Key key={index} onMouseDown={() => playNote(note)}>
            {note}
          </Key>
        ))}
      </KeysContainer>
    </KeyboardContainer>
  );
};

export default Keyboard;
