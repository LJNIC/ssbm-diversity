import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CharacterBarChart(props) {
    const { activeIndex, setIndex, data } = props;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
        <p>Click each rectangle </p>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart width={150} height={300} data={data} layout="vertical">
            <XAxis type="number"/>
            <YAxis type="category" dataKey="character" width={100}/>
            <Bar dataKey="count" onClick={(data, index) => setIndex(index)}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

