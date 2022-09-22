import { Tournament } from './types';

type ItemProps = {
  tournament: Tournament;
  setTournament: any;
  active: boolean;
}

function TournamentListItem(props: ItemProps) {
  const { tournament, setTournament, active } = props;

  return (
    <button className={`TournamentListItem ${active ? "active" : ""}`} onClick={e => setTournament(tournament)}>
      <span> {tournament.name} </span>
    </button>
  );
}

type ListProps = {
  tournaments: Tournament[];
  setTournament: any;
  activeTournament: Tournament;
  year: string;
}

export default function TournamentList(props: ListProps) {
  const { tournaments, setTournament, activeTournament, year } = props;

  const elements = tournaments.map(tournament =>
      <TournamentListItem 
        tournament={tournament} 
        setTournament={setTournament}
        active={activeTournament.name === tournament.name}
        key={tournament.name}
      />
  );

  return (
    <div>
      <h1> {year} </h1>
      <ul className="TournamentList"> {elements} </ul>
    </div>
  );
}
