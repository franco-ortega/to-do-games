'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { useEffect, useState } from 'react';

type Game = [string, { played: boolean }];

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  const [data, setData] = useState([] as Game[]);

  console.log('DATA:', data);

  useEffect(() => {
    if (!data.length) setData(weekData);
  }, [data, weekData]);

  return <GamesToPlay gameData={weekData} title={'Week'} />;
}
