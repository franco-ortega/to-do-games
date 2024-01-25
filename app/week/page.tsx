'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { Game, TimeSpanOptions } from '../../utils/types';
import { timeSpan } from '@/utils/enums';

export default function WeekPage() {
  const weekData = sampleData.week as Game[];

  return (
    <GamesToPlay
      gameData={weekData}
      timeSpan={timeSpan.week as TimeSpanOptions}
    />
  );
}
