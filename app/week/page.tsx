'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { Game } from '../../utils/types';

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  return <GamesToPlay gameData={weekData} time={'Week'} />;
}
