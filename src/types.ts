export type Player = {
  name: string;
  placing: string;
}

export type Character = {
  character: string;
  count: number;
  players: Player[];
}

export type Tournament = {
  name: string;
  characters: Character[];
}

