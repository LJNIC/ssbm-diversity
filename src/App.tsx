import CharacterBarChart from './CharacterBarChart';
import CharacterDonutChart from './CharacterDonutChart';
import PlayerList from './PlayerList';
import TournamentList from './TournamentList';
import React, { useState } from 'react';
import { Tournament } from './types';
import { data } from './config';
import './App.css';

function App() {
  const [activeYear, setYear] = useState(0);
  const [activeTournament, setTournament] = useState<Tournament>(data[0].tournaments[0]);
  const [activeIndex, setIndex] = useState<number | null>(null);

  const players = activeIndex === null ? [] : activeTournament.characters[activeIndex].players

  const updateTournament = (nextTournament: Tournament) => {
    if (activeIndex !== null) {
      const character = activeTournament.characters[activeIndex].character
      let nextIndex = nextTournament.characters.findIndex(el => el.character === character);
      if (nextIndex < 0) nextIndex = 0;
      setIndex(nextIndex);
    }

    setTournament(nextTournament);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        Melee Character Diversity
      </header>
      <main className='App-main'>
      <TournamentList
        tournaments={data[activeYear].tournaments}
        year={data[activeYear].year}
        setTournament={updateTournament}
        activeTournament={activeTournament}
      />
      <CharacterBarChart 
        data={activeTournament}
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
