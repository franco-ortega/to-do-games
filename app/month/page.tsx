'use client';

import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function MonthPage() {
  return <GamesToPlay timeSpan={timeSpan.month as TimeSpanOptions} />;
}
