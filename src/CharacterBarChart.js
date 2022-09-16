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

export default function CharacterBarChart(props) {
  const { activeIndex, setIndex, data } = props;
  const activeItem = data[activeIndex];

  return (
    <div style={{ width: '50%' }}>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart width={150} height={300} data={data} layout='vertical'>
          <XAxis type='number'/>
          <YAxis type='category' dataKey='character' width={100} tick={renderCharacterTick}/>
          <Bar dataKey='count' onClick={(data, index) => setIndex(index)}>
            {data.map((entry, index) => (
              <Cell cursor='pointer' fill={characterColours[entry.character]} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

