'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { Game, TimeSpanOptions } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function YearPage() {
  const data = sampleData.year as Game[];

  return (
    <GamesToPlay gameData={data} timeSpan={timeSpan.year as TimeSpanOptions} />
  );
}
