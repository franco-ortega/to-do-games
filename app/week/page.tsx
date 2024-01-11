'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';

type Game = [string, { played: boolean }];

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  return <GamesToPlay gameData={weekData} time={'Week'} />;
}
