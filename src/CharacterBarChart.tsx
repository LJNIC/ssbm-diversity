import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { characterColours, characterIcons } from './config';
import { Tournament } from './types';

function renderCharacterTick({x, y, payload}: { x: number; y: number; payload: any}) {
  return (
    <image y={y - 12} x={x - 24} href={characterIcons[payload.value + '.png']}/>
  );
}

function CharacterToolTip({payload, active}: any) {
  if (active) {
    return (
      <p className="Tooltip"> {payload[0].value} {payload[0].value=== 1 ? "player" : "players"} </p>
    );
  }

  return null;
}

type Props = {
  activeIndex: number | null;
  setIndex: any;
  data: Tournament;
}

export default function CharacterBarChart(props: Props) {
  const { activeIndex, setIndex, data } = props;

  return (
    <div style={{ width: '50%' }}>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart width={150} height={300} data={data.characters} layout='vertical'>
          <XAxis type='number' stroke="white"/>
          <YAxis type='category' dataKey='character' width={100} tick={renderCharacterTick} stroke="none"/>
          <Tooltip 
            content={<CharacterToolTip/>} 
            cursor={false}
            wrapperStyle={{ backgroundColor: "transparent", width: "100px" }}
          />
          <Bar dataKey='count' onClick={(data, index) => setIndex(index)}>
            {data.characters.map((entry, index) => {
              const colour = characterColours[entry.character];
              return (
                <Cell 
                  cursor='pointer' 
                  fill={colour} 
                  fillOpacity={activeIndex === index ? 0.75 : 0.25}
                  key={`cell-${index}`} 
                  stroke={colour}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

