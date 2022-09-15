function PlayerListItem(props) {
    const { name, placing } = props.player;
    return (
        <li className="PlayerListItem"> {placing} {name} </li>
    );
}

export default function PlayerList(props) {
    console.log(props)
    const elements = props.players.map((player) =>
        <PlayerListItem player={player}/>
    );
    return (
        <ul className="PlayerList">{elements}</ul>
    );
}
