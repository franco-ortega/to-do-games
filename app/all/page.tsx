'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';

export default function AllPage() {
  return (
    <main>
      <h2>All Games to Play</h2>
      <GamesToPlay timeSpan={timeSpanOptions.week} />
      <GamesToPlay timeSpan={timeSpanOptions.month} />
      <GamesToPlay timeSpan={timeSpanOptions.year} />
    </main>
  );
}
