import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';

export default function WeekPage() {
  return <GamesToPlay timeSpan={timeSpanOptions.week} />;
}
