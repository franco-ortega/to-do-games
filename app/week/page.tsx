import { TimeSpanOptions } from '@/utils/enums';
import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';

export default function WeekPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.week} />;
}
