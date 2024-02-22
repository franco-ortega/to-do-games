import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '../../utils/types';
import { timeSpan } from '@/utils/enums';

export default function WeekPage() {
  return <GamesToPlay timeSpan={timeSpan.week.title as TimeSpanOptions} />;
}
