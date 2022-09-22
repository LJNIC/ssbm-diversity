import React, { Component } from 'react';
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { characterColours, characterIcons } from './config'
import { Tournament } from './types';

type Props = {
  activeIndex: number;
  setIndex: any;
  data: Tournament;
}

export default function CharacterDonutChart(props: Props) {
  const { activeIndex, setIndex, data } = props;

  return (
    <div style={{ width: '50%' }}>
      <ResponsiveContainer width='100%' height={500}>
        <PieChart width={730} height={250}>
          <Pie 
            dataKey='count' 
            data={data.characters}
            onClick={(data, index) => setIndex(index)}
            cx="50%"
            cy="50%"
            paddingAngle={3}
            innerRadius={150}
            outerRadius={200}
          >
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
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

