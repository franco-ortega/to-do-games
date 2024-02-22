import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function YearPage() {
  return <GamesToPlay timeSpan={timeSpan.year as TimeSpanOptions} />;
}
