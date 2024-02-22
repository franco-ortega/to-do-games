'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function AllPage() {
  return (
    <main>
      <h2>All Games to Play</h2>
      <GamesToPlay timeSpan={timeSpan.week.title as TimeSpanOptions} />
      <GamesToPlay timeSpan={timeSpan.month.title as TimeSpanOptions} />
      <GamesToPlay timeSpan={timeSpan.year.title as TimeSpanOptions} />
    </main>
  );
}
