import React, { useState } from 'react';
import * as Tone from 'tone';
import styled from 'styled-components';

const instruments = {
  Synth: new Tone.Synth().toDestination(),
  AMSynth: new Tone.AMSynth().toDestination(),
  FMSynth: new Tone.FMSynth().toDestination(),
  DuoSynth: new Tone.DuoSynth().toDestination(),
  MonoSynth: new Tone.MonoSynth().toDestination()
};

const SelectorContainer = styled.div`
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-right: 10px;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    border: 1px solid #999;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    padding: 3px 5px;
    font-size: 0.8rem;
  }
`;

const InstrumentSelector = ({ setInstrument }) => {
  const [selectedInstrument, setSelectedInstrument] = useState('Synth');

  const handleChange = (event) => {
    setSelectedInstrument(event.target.value);
    setInstrument(instruments[event.target.value]);
  };

  return (
    <SelectorContainer>
      <Label htmlFor="instrument">Choose an instrument:</Label>
      <Select
        id="instrument"
        value={selectedInstrument}
        onChange={handleChange}
      >
        {Object.keys(instruments).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
};

export default InstrumentSelector;
