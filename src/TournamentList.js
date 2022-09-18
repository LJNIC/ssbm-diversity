import button from './assets/menu.png';

function TournamentListItem(props) {
  const { tournament, setTournament, active } = props;

  return (
    <button className={`TournamentListItem ${active ? "active" : ""}`} onClick={e => setTournament(tournament)}>
      <span> {tournament.label} </span>
    </button>
  );
}

export default function TournamentList(props) {
  const { tournaments, setTournament, activeTournament } = props;

  const elements = props.tournaments.map(tournament =>
      <TournamentListItem 
        tournament={tournament} 
        setTournament={setTournament}
        active={activeTournament.value == tournament.value}
      />
  );

  return (
    <ul className="TournamentList"> {elements} </ul>
  );
}
