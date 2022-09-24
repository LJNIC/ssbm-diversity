import CharacterDonutChart from './CharacterDonutChart';
import CharacterBarChart from './CharacterBarChart';
import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Tournament } from './types';

type Props = {
  activeIndex: number;
  setIndex: any;
  data: Tournament;
}

function wrap (num: number, min: number, max: number): number { 
  return ((((num - min) % (max - min)) + (max - min)) % (max - min)) + min;
}

export default function CharacterChart(props: Props) {
  const [ chart, setChart ] = useState(0);
  const { data, setIndex, activeIndex } = props;

  return (
    <div className="CharacterChart">
      <Splide 
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          direction: 'ttb',
          height: '500px',
          pagination: false
        }}
      >
        <SplideSlide>
          <CharacterDonutChart 
            data={data}
            setIndex={setIndex}
            activeIndex={activeIndex}
          />
        </SplideSlide>
        <SplideSlide>
          <CharacterBarChart 
            data={data}
            setIndex={setIndex}
            activeIndex={activeIndex}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
