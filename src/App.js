import CharacterChart from './CharacterBarChart';
import Select from 'react-select';
import React, { useState } from 'react';
import tournaments from './data/data.json';
import './App.css';

const options = [
  { value: 'genesis2022', label: 'Genesis' },
  { value: 'pound2022', label: 'Pound' },
  { value: 'battleofbc2022', label: 'Battle of BC' },
  { value: 'getonmylevel2022', label: 'Get On My Level' },
  { value: 'doubledown2022', label: 'Double Down' },
  { value: 'supersmashcon2022', label: 'Super Smash Con' },
  { value: 'shine2022', label: 'Shine' },
  { value: 'riptide2022', label: 'Riptide' }
]
function App() {
  const [selectedTournament, setTournament] = useState(options[0]);
  const [activeIndex, setIndex] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Select 
          options={options} 
          value={selectedTournament}
          onChange={setTournament}
        />
        <CharacterChart 
          data={tournaments[selectedTournament.value]}
          setIndex={setIndex}
          activeIndex={activeIndex}
        />
      </header>
    </div>
  );
}

export default App;
