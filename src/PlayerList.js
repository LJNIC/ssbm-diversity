function PlayerListItem(props) {
  const { name, placing } = props.player;
  return (
    <li className="PlayerListItem"> 
      {placing} <a href={"https://ssbwiki.com/Smasher:" + name}> {name}</a>
    </li>
  );
}

export default function PlayerList(props) {
  const elements = props.players.map((player) =>
    <PlayerListItem player={player}/>
  );

  return (
    <ul className="PlayerList">{elements}</ul>
  );
}
