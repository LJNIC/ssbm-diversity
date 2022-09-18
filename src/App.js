import CharacterChart from './CharacterBarChart';
import PlayerList from './PlayerList';
import TournamentList from './TournamentList';
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
  const [activeTournament, setTournament] = useState(options[0]);
  const [activeIndex, setIndex] = useState(null);
  const data = tournaments[activeTournament.value]
  console.log(activeTournament)
  const players = activeIndex === null ? [] : data[activeIndex].players

  const updateTournament = (option) => {
    const nextTournament = tournaments[option.value]

    if (activeIndex !== null) {
      const character = data[activeIndex].character
      let nextIndex = nextTournament.findIndex(el => el.character === character);
      if (nextIndex < 0) nextIndex = 0;
      setIndex(nextIndex);
    }

    setTournament(option);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        Melee Character Diversity
      </header>
      <main className='App-main'>
      <TournamentList
        tournaments={options}
        setTournament={updateTournament}
        activeTournament={activeTournament}
      />
      <CharacterChart 
        data={data}
        setIndex={setIndex}
        activeIndex={activeIndex}
      />
      <PlayerList players={players}/>
      </main>
      <footer className='App-footer'>
      </footer>
    </div>
  );
}

export default App;
