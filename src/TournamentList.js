function TournamentListItem(props) {
  const { tournament, setTournament } = props;

  return (
    <button className="TournamentListItem" onClick={e => setTournament(tournament)}>
      {tournament.label}
    </button>
  );
}

export default function TournamentList(props) {
  const { tournaments, setTournament } = props;

  const elements = props.tournaments.map(tournament =>
      <TournamentListItem tournament={tournament} setTournament={setTournament}/>
  );

  return (
    <ul className="TournamentList"> {elements} </ul>
  );
}
