import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { characterColours } from './theme'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const characterIcons = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function renderCharacterTick({x, y, payload}) {
  return (
    <image y={y - 12} x={x - 24} href={characterIcons[payload.value + '.png']}/>
  );
}

function CharacterToolTip({payload, label, active}) {
  if (active) {
    return (
      <p className="Tooltip"> {payload[0].value} {payload[0].value=== 1 ? "player" : "players"} </p>
    );
  }
}

export default function CharacterBarChart(props) {
  const { activeIndex, setIndex, data } = props;
  const activeItem = data[activeIndex];

  return (
    <div style={{ width: '50%' }}>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart width={150} height={300} data={data} layout='vertical'>
          <XAxis type='number'/>
          <YAxis type='category' dataKey='character' width={100} tick={renderCharacterTick}/>
          <Tooltip 
            content={<CharacterToolTip/>} 
            cursor={false}
            wrapperStyle={{ backgroundColor: "transparent", width: "100px" }}
          />
          <Bar dataKey='count' onClick={(data, index) => setIndex(index)}>
            {data.map((entry, index) => {
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

