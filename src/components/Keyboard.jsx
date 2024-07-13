import React from 'react';
import * as Tone from 'tone';
import styled from 'styled-components';

const notes = [
  'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
  'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'
];

const Key = styled.button`
  width: 40px;
  height: 120px;
  margin: 2px;
  background: white;
  border: 1px solid black;
  &:active {
    background: lightgrey;
  }
`;

const Keyboard = () => {
  const playNote = (note) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n');
  };

  return (
    <div>
      {notes.map((note, index) => (
        <Key key={index} onMouseDown={() => playNote(note)}>
          {note}
        </Key>
      ))}
    </div>
  );
};

export default Keyboard;
