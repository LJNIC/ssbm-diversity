import { Player } from './types';

function PlayerListItem(props: { player: Player} ) {
  const { name, placing } = props.player;
  return (
    <li className="PlayerListItem"> 
      {placing} <a href={"https://ssbwiki.com/Smasher:" + name}> {name}</a>
    </li>
  );
}

export default function PlayerList(props: { players: Player[] }) {
  const elements = props.players.map((player) =>
    <PlayerListItem player={player} key={player.name}/>
  );

  return (
    <ul className="PlayerList">{elements}</ul>
  );
}
