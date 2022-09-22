import CharacterDonutChart from './CharacterDonutChart';
import CharacterBarChart from './CharacterBarChart';
import React, { useState } from 'react';
import { Tournament } from './types';

type Props = {
  activeIndex: number;
  setIndex: any;
  data: Tournament;
}

export default function CharacterChart(props: Props) {
  const [ chart, setChart ] = useState(0);
  const { data, setIndex, activeIndex } = props;

  return (
    <div className="CharacterChart">

    </div>
  );
}
