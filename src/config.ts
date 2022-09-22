import { Tournament } from './types';
import year2019 from './data/2019.json';
import year2022 from './data/2022.json';

function importAll(r: any) {
  let images: Record<string, string> = {};
  r.keys().forEach((item: string, index: number) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

export const characterIcons: Record<string, string> = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

type TournamentData = {
  year: string;
  tournaments: Tournament[];
}

export const data: TournamentData[] = [
  { 
    year: "2019", 
    tournaments: year2019 as Tournament[]
  },
  {
    year: "2022",
    tournaments: year2022 as Tournament[]
  }
]

export const characterColours: Record<string, string> = {
  "Fox": "#ea9d2a", 
  "Falco": "#3f60f4", 
  "Marth": "#48429e",
  "Captain Falcon": "#d82f2f", 
  "Jigglypuff": "pink", 
  "Sheik": "#e0dedb", 
  "Peach": "pink", 
  "Dr. Mario": "white", 
  "Luigi": "green", 
  "Ice Climbers": "#83e6ef", 
  "Pikachu": "#f6fc3f", 
  "Roy": "#892201", 
  "Samus": "red", 
  "Mario": "#d82f2f", 
  "Pichu": "#fafe68", 
  "Bowser": "#2c4313", 
  "Donkey Kong": "brown", 
  "Kirby": "pink", 
  "Mewtwo": "#c9c5d5", 
  "Zelda": "pink", 
  "Link": "#22a732", 
  "Young Link": "#22a732", 
  "Mr. Game & Watch": "white", 
  "Yoshi": "#59cc55", 
  "Ganondorf": "#62250c", 
  "Ness": "white"
}
