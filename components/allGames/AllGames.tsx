import React from 'react';
import GamesToPlay from '../gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';

type Props = {};

export default function AllGames({}: Props) {
  return (
    <main>
      <h2>All Games to Play</h2>
      <GamesToPlay timeSpan={timeSpanOptions.week} />
      <GamesToPlay timeSpan={timeSpanOptions.month} />
      <GamesToPlay timeSpan={timeSpanOptions.year} />
    </main>
  );
}
